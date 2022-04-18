import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { io } from 'socket.io-client';

import TInput from 'components/input';
import TBox from 'components/box';
import TSelect from 'components/select';

import { dayOfWeekEn, dayOfWeekVi, partsOfDayEn, partsOfDayVi } from 'constants/enum/date';
import { Language } from 'constants/enum/language';
import { scheduleTypeEn, scheduleTypeVi } from 'constants/enum/schedule';

import TButton from 'components/button';
import TGrid from 'components/grid';

import { RootState } from 'store';
import { setLoading } from 'store/slices/common';
import { setAlert } from 'store/slices/alert';

import { revertDateSlashToMinus } from 'utils/dateTime';

const socket = io('https://te11api.herokuapp.com/');

export type TGeneratorSchedule = {
  _id?: string;
  type?: number;
  name?: string;
  room?: string;
  dayOfWeek?: string;
  partOfDay?: string;
  dayStart?: string;
  time?: string;
  dayEnd?: string;
  linkMeet?: Array<string>;
  linkClass?: Array<string>;
};
export type TMatchGeneratorScheduleParams = {
  _id?: string;
};
const TGeneratorSchedule = ({ match }: RouteComponentProps<TMatchGeneratorScheduleParams>) => {
  const { t } = useTranslation();
  const _id = match.params._id;
  const currentUser = useSelector((state: RootState) => state.auth.userData);
  const canPost = currentUser && currentUser.role < 2;
  const [scheduleData, setScheduleData] = useState<TGeneratorSchedule>();
  const currentLanguage = useSelector((state: RootState) => state.common.language);
  const daysOfWeek = currentLanguage === Language.EN_US ? dayOfWeekEn : dayOfWeekVi;
  const partsOfDay = currentLanguage === Language.EN_US ? partsOfDayEn : partsOfDayVi;
  const scheduleType = currentLanguage === Language.EN_US ? scheduleTypeEn : scheduleTypeVi;
  const method = scheduleData ? 'PATCH' : 'POST';
  const path = scheduleData ? '/stored/' + scheduleData?._id : '/create';
  const initialValues = {
    type: scheduleData?.type || '0',
    name: scheduleData?.name || '',
    room: scheduleData?.room || '',
    dayOfWeek: scheduleData?.dayOfWeek || '0',
    partOfDay: scheduleData?.partOfDay || '0',
    dayStart: revertDateSlashToMinus(scheduleData?.dayStart) || '',
    dayEnd: revertDateSlashToMinus(scheduleData?.dayEnd) || '',
    time: scheduleData?.time || '',
    linkMeet: scheduleData?.linkMeet?.length ? scheduleData.linkMeet : [''],
    linkClass: scheduleData?.linkClass?.length ? scheduleData.linkClass : [''],
  };
  const CreateScheduleSchema = Yup.object().shape({
    name: Yup.string().trim().required(t('name_is_not_valid')),
    room: Yup.string().trim().required(t('room_is_not_valid')),
    dayStart: Yup.date().required(t('period_is_not_valid')),
    dayEnd: Yup.date().when('type', {
      is: '0',
      then: (schema) => schema.min(Yup.ref('dayStart'), t('period_is_not_valid')).required(t('period_is_not_valid')),
    }),
    time: Yup.string().matches(/^((([01]?[0-9])|(2[0-3]))(([h \:][0-5]?[0-9])|h)(\s\-\s)?)+$/, t('time_is_not_valid')),
    linkMeet: Yup.array().of(
      Yup.string().matches(/^(https:\/\/|http:\/\/)?meet.google.com\/\S*$/, t('link_meet_is_not_valid')),
    ),
    linkClass: Yup.array().of(
      Yup.string().matches(/^(https:\/\/|http:\/\/)?meet.google.com\/\S*$/, t('link_class_is_not_valid')),
    ),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (_id) {
      fetch('https://te11api.herokuapp.com/schedules/stored/' + _id)
        .then((res) => {
          if (res.status >= 400) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then((res) => {
          setScheduleData(res);
        })
        .catch(() => {
          dispatch(
            setAlert({
              type: 'error',
              message: t('schedule_not_found'),
              title: t('error'),
            }),
          );
        });
    }
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(setLoading(true));
        fetch('https://te11api.herokuapp.com/schedules' + path, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values, tokenUser: localStorage.getItem('tokenUser') }),
        })
          .then((response) => {
            if (response.status < 400) {
              dispatch(setAlert({ type: 'success', title: t('success'), message: t('schedule_create_successfully') }));
              dispatch(setLoading(false));
              socket.emit('notif:created', {
                type: 'success',
                message: 'Create schedule successfully',
              });
              socket.emit('schedule:updated', {});
            } else {
              throw new Error('create-failed');
            }
          })
          .catch(() => {
            dispatch(setLoading(false));
            dispatch(setAlert({ type: 'error', title: t('error'), message: t('schedule_create_failed') }));
          });
        setSubmitting(false);
      }}
      validationSchema={CreateScheduleSchema}
    >
      {({ errors, touched, values, handleChange, setFieldValue }) => (
        <Form>
          <TGrid container>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TSelect
                disabled={!canPost}
                name="type"
                value={values.type}
                label={t('type')}
                onChange={handleChange}
                formControlProps={{ marginbottom: 3, width: '100%' }}
                width="100%"
              >
                {scheduleType.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </TSelect>
            </TGrid>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TInput
                disabled={!canPost}
                name="name"
                value={values.name}
                label={t('name')}
                error={touched.name && !!errors.name}
                onChange={handleChange}
                helperText={touched.name && errors.name}
                marginbottom={3}
                width="100%"
              />
            </TGrid>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TInput
                disabled={!canPost}
                name="room"
                value={values.room}
                label={t('room')}
                error={touched.room && !!errors.room}
                onChange={handleChange}
                helperText={touched.room && errors.room}
                marginbottom={3}
                width="100%"
              />
            </TGrid>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TSelect
                disabled={!canPost}
                name="dayOfWeek"
                value={values.dayOfWeek}
                label={t('day_of_week')}
                onChange={handleChange}
                formControlProps={{ marginbottom: 3, width: '100%' }}
                width="100%"
              >
                {daysOfWeek.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </TSelect>
            </TGrid>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TSelect
                disabled={!canPost}
                name="partOfDay"
                value={values.partOfDay}
                label={t('part_of_day')}
                onChange={handleChange}
                minwidth={10}
                formControlProps={{ marginbottom: 3, width: '100%' }}
                width="100%"
              >
                {partsOfDay.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </TSelect>
            </TGrid>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TInput
                disabled={!canPost}
                name="dayStart"
                value={values.dayStart}
                error={touched.dayStart && !!errors.dayStart}
                label={t('day_start')}
                onChange={handleChange}
                type="date"
                marginbottom={3}
                helperText={touched.dayStart && errors.dayStart}
                width="100%"
                placeholder=""
              />
            </TGrid>
            <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
              <TInput
                disabled={!canPost}
                name="time"
                value={values.time}
                error={touched.time && !!errors.time}
                label={t('time')}
                onChange={handleChange}
                marginbottom={3}
                placeholder={t('time_examples')}
                helperText={touched.time && errors.time}
                width="100%"
              />
            </TGrid>
            {values.type == 0 && (
              <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1}>
                <TInput
                  disabled={!canPost}
                  name="dayEnd"
                  value={values.dayEnd}
                  error={touched.dayEnd && !!errors.dayEnd}
                  label={t('day_end')}
                  placeholder=""
                  onChange={handleChange}
                  type="date"
                  marginbottom={3}
                  helperText={touched.dayEnd && errors.dayEnd}
                  width="100%"
                />
              </TGrid>
            )}
            {values.linkMeet.map((link, index) => (
              <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1} key={index}>
                <TGrid container marginbottom={3} alignItems="center">
                  <TGrid item xs={8}>
                    <TInput
                      disabled={!canPost}
                      name={`linkMeet[${index}]`}
                      value={link}
                      error={Array.isArray(errors.linkMeet) && !!errors.linkMeet[index]}
                      label={t('link_meet')}
                      onChange={(e) => {
                        handleChange(e);
                        const newLinkMeets = [...values.linkMeet];
                        newLinkMeets[index] = e.target.value;
                        setFieldValue('linkMeet', newLinkMeets);
                      }}
                      helperText={Array.isArray(errors.linkMeet) && errors.linkMeet[index]}
                      width="100%"
                    />
                  </TGrid>
                  {!!canPost && (
                    <>
                      <TGrid item xs={2} paddingleft={2} paddingRight={1}>
                        <TButton
                          variant="contained"
                          onClick={() => {
                            const newLinkMeets = [...values.linkMeet, ''];
                            setFieldValue('linkMeet', newLinkMeets);
                          }}
                          width="100%"
                          minwidth={3}
                          height={7}
                        >
                          {t('add')}
                        </TButton>
                      </TGrid>
                      <TGrid item xs={2} paddingleft={2} paddingRight={1}>
                        <TButton
                          variant="contained"
                          color="error"
                          onClick={() => {
                            const newLinkMeets = [...values.linkMeet];
                            newLinkMeets.splice(index, 1);
                            setFieldValue('linkMeet', newLinkMeets);
                          }}
                          width="100%"
                          minwidth={3}
                          height={7}
                        >
                          {t('remove')}
                        </TButton>
                      </TGrid>
                    </>
                  )}
                </TGrid>
              </TGrid>
            ))}
            {values.linkClass.map((link, index) => (
              <TGrid item md={6} xs={12} paddingleft={1} paddingRight={1} key={index}>
                <TGrid container marginbottom={3} alignItems="center">
                  <TGrid item xs={8}>
                    <TInput
                      name={`linkClass[${index}]`}
                      value={link}
                      error={Array.isArray(errors.linkClass) && !!errors.linkClass[index]}
                      label={t('link_class')}
                      onChange={(e) => {
                        handleChange(e);
                        const newLinkClass = [...values.linkClass];
                        newLinkClass[index] = e.target.value;
                        setFieldValue('linkClass', newLinkClass);
                      }}
                      helperText={Array.isArray(errors.linkClass) && errors.linkClass[index]}
                      width="100%"
                    />
                  </TGrid>
                  {!!canPost && (
                    <>
                      <TGrid item xs={2} paddingleft={2} paddingRight={1}>
                        <TButton
                          variant="contained"
                          onClick={() => {
                            const newLinkMeets = [...values.linkClass, ''];
                            setFieldValue('linkClass', newLinkMeets);
                          }}
                          width="100%"
                          minwidth={3}
                          height={7}
                        >
                          {t('add')}
                        </TButton>
                      </TGrid>
                      <TGrid item xs={2} paddingleft={2} paddingRight={1}>
                        <TButton
                          variant="contained"
                          color="error"
                          onClick={() => {
                            const newLinkClass = [...values.linkClass];
                            newLinkClass.splice(index, 1);
                            setFieldValue('linkClass', newLinkClass);
                          }}
                          width="100%"
                          minwidth={3}
                          height={7}
                        >
                          {t('remove')}
                        </TButton>
                      </TGrid>
                    </>
                  )}
                </TGrid>
              </TGrid>
            ))}
          </TGrid>
          {!!canPost && (
            <TBox textalign="center">
              <TButton type="submit" variant="contained" width={17} height={7}>
                {scheduleData ? t('update') : t('create')}
              </TButton>
            </TBox>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default memo(TGeneratorSchedule);
