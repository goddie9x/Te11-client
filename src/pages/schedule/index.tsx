import React, { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TTable, { TTableColumnData } from 'components/table';
import TBox from 'components/box';
import TButton from 'components/button';
import TTypography from 'components/typography';

import { setLoading } from 'store/slices/common';
import { setAlert } from 'store/slices/alert';
import { RootState } from 'store';

import { dayOfWeekEn, dayOfWeekVi, partsOfDayEn, partsOfDayVi } from 'constants/enum/date';
import { Language } from 'constants/enum/language';
import { setHelmet } from 'store/slices/helmet';

export type TSchedulesProps = {
  //0: schedule, 1: examination
  type?: number;
};

const TSchedules = ({ type }: TSchedulesProps) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalSchedules, setTotalSchedules] = useState(0);
  const [rows, setRows] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state: RootState) => state.common.language);
  const dayOfWeek = language === Language.EN_US ? dayOfWeekEn : dayOfWeekVi;
  const partsOfDay = language === Language.EN_US ? partsOfDayEn : partsOfDayVi;

  const columns: TTableColumnData[] = [
    { field: '_id', headerName: t('id'), align: 'center', hidden: true, renderCell: ({ value }) => <TBox>{value}</TBox> },
    { field: 'name', headerName: t('name'), sortable: true, align: 'center' },
    {
      field: 'dayOfWeek',
      headerName: t('day_of_week'),
      sortable: true,
      align: 'center',
      renderCell: ({ value }) => <TTypography>{dayOfWeek[value as number]}</TTypography>,
    },
    {
      field: 'partOfDay',
      headerName: t('part_of_day'),
      sortable: true,
      align: 'center',
      renderCell: ({ value }) => <TTypography>{partsOfDay[value as number]}</TTypography>,
    },
    { field: 'room', headerName: t('room'), sortable: true, align: 'center' },
    { field: 'dayStart', headerName: t('day_start'), sortable: true, align: 'center' },
    { field: 'dayEnd', headerName: t('day_end'), sortable: true, align: 'center', hidden: !!type },
    { field: 'time', headerName: t('time'), sortable: true, align: 'center' },
    {
      field: 'linkMeet',
      headerName: t('link_meet'),
      align: 'center',
      renderCell: ({ value }) =>
        Array.isArray(value) &&
        value.map(
          (value2, index) =>
            value2 && (
              <TButton key={index} marginright={1} onClick={() => window.open(value2, '_blank')}>
                {t('link_index', { index: index + 1 })}
              </TButton>
            ),
        ),
    },
    {
      field: 'linkClass',
      headerName: t('link_class'),
      align: 'center',
      renderCell: ({ value }) =>
        Array.isArray(value) &&
        value.map(
          (value2, index) =>
            value2 && (
              <TButton key={index} marginright={1} onClick={() => window.open(value2, '_blank')}>
                {t('link_index', { index: index + 1 })}
              </TButton>
            ),
        ),
    },
  ];

  useEffect(() => {
    const tokenUser = localStorage.getItem('tokenUser');
    const urlGetSchedule =
      'https://te11api.herokuapp.com/schedules/?page=' + page + '&perPage=' + rowsPerPage + (type ? '&type=' + type : '');
    let isSubscribed = true;

    dispatch(setLoading(true));
    fetch(urlGetSchedule, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(response.statusText);
        }
        const data = response.json();
        return data;
      })
      .then((data) => {
        if (isSubscribed) {
          setRows(data.schedules);
          setTotalSchedules(data.countCurrentStored);
        }
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setAlert({ type: 'error', message: t('error'), title: t('error_fetch_data') }));
        dispatch(setLoading(false));
        history.push('/not_found');
      });

    return () => {
      isSubscribed = false;
    };
  }, [page]);
  useEffect(() => {
    dispatch(setHelmet({ title: type === 1 ? t('examination_schedule') : t('schedules') }));
  }, []);

  return rows ? (
    <TBox>
      <TTable
        rows={rows}
        columns={columns}
        paginationProps={{
          count: totalSchedules,
          rowsPerPageOptions: [5, 10, 25],
          page: page - 1,
          rowsPerPage: rowsPerPage,
          onPageChange: (event: unknown, newPage: number) => {
            setPage(newPage + 1);
          },
          onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(+event.target.value);
            setPage(1);
          },
        }}
      />
    </TBox>
  ) : null;
};

export default memo(TSchedules);
