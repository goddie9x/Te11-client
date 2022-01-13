import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import * as Yup from 'yup';

import TModal from 'components/modal';
import TInput from 'components/input';
import TBox from 'components/box';
import TTypography from 'components/typography';
import TButton from 'components/button';

import { openLoginModal, openRegisterModal } from 'store/slices/auth';

const TRegisterModal = () => {
  const isOpenRegisterModal = useSelector((state: RootState) => state.auth.isOpenRegisterModal);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const initialValue = {
    account: '',
    password: '',
    reEnterPassword: '',
  };
  const RegisterSchema = Yup.object().shape({
    account: Yup.string().min(5, t('accounr_not_valid')).max(50, t('accounr_not_valid')).required(t('accounr_not_valid')),
    password: Yup.string()
      .min(8, t('password_are_not_valid'))
      .max(50, t('password_are_not_valid'))
      .required(t('password_are_not_valid')),
    reEnterPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('password_are_not_match'))
      .required(t('password_are_not_valid')),
  });

  const handleCloseRegisterModal = () => {
    dispatch(openRegisterModal(false));
  };

  return (
    <TModal open={isOpenRegisterModal} title={t('register_to_te11')} onClose={handleCloseRegisterModal}>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <TBox display="flex" flexDirection="column">
                <TInput
                  marginBottom={2}
                  name="account"
                  label={t('account')}
                  placeholder={t('account')}
                  error={!!touched.account && !!errors.account}
                  onMouseDown={() => (touched.account = true)}
                  helperText={touched.account && errors.account}
                  onChange={handleChange}
                />
                <TInput
                  marginBottom={2}
                  name="password"
                  label={t('password')}
                  placeholder={t('password')}
                  error={!!touched.password && !!errors.password}
                  onMouseDown={() => (touched.password = true)}
                  helperText={touched.password && errors.password}
                  onChange={handleChange}
                />
                <TInput
                  marginBottom={2}
                  name="reEnterPassword"
                  label={t('re_enter_password')}
                  placeholder={t('re_enter_password')}
                  error={!!touched.reEnterPassword && !!errors.reEnterPassword}
                  onMouseDown={() => (touched.reEnterPassword = true)}
                  helperText={touched.reEnterPassword && errors.reEnterPassword}
                  onChange={handleChange}
                />
                <TButton type="submit" variant="contained" marginBottom={3}>
                  {t('login')}
                </TButton>
                <TBox display="flex" marginBottom={2} alignItems="center">
                  <TTypography variant="caption" color="textSecondary">
                    {t('you_already_have_an_account')}
                  </TTypography>
                  <TButton onClick={() => dispatch(openLoginModal(true))}>{t('login_here')}</TButton>
                </TBox>
              </TBox>
            </Form>
          );
        }}
      </Formik>
    </TModal>
  );
};

export default TRegisterModal;
