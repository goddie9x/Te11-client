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

import { openRegisterModal, openLoginModal } from 'store/slices/auth';

const TLoginModal = () => {
  const isOpenLoginModal = useSelector((state: RootState) => state.auth.isOpenLoginModal);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const initialValue = {
    account: '',
    password: '',
  };
  const LoginSchema = Yup.object().shape({
    account: Yup.string().min(5, t('accounr_not_valid')).max(50, t('accounr_not_valid')).required( t('accounr_not_valid')),
    password: Yup.string().min(8, t('password_are_not_valid')).max(50, t('password_are_not_valid')).required(t('password_are_not_valid')),
  });

  const handleCloseLoginModal = () => {
    dispatch(openLoginModal(false));
  };

  return (
    <TModal open={isOpenLoginModal} title={t('login_to_te11')} onClose={handleCloseLoginModal}>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={LoginSchema}
      >
        {({ errors, touched, handleChange }) => {
         return <Form>
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
              <TBox display="flex" marginBottom={2} alignItems="center">
                <TButton >
                  {t('forgot_password')}
                </TButton>
              </TBox>
                <TButton type="submit" variant="contained" marginBottom={3}>{t('login')}</TButton>
              <TBox display="flex" marginBottom={2} alignItems="center">
                <TTypography variant="caption" color="textSecondary">
                  {t('you_already_have_an_account')}
                </TTypography>
                <TButton onClick={() => dispatch(openRegisterModal(true))}>{t('register_here')}</TButton>
              </TBox>
            </TBox>
          </Form>;
        }}
      </Formik>
    </TModal>
  );
};

export default TLoginModal;
