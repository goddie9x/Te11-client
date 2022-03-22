import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAlert } from 'store/slices/alert';
import i18n from 'i18n';
import {
  incrementLoginAttempts,
  closeRegisterModal,
  incrementRegisterAttempts,
  turnOffReCaptchaRegister,
  setIsLogin,
} from 'store/slices/auth';

import { setLoading } from 'store/slices/common';
interface LoginSchema {
  account?: string;
  password?: string;
  email?: string;
}

export const login = createAsyncThunk('auth/login', async (data: LoginSchema, { dispatch, rejectWithValue }) => {
  dispatch(setLoading(true));

  const response = await fetch('https://te11api.herokuapp.com/user/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    dispatch(setLoading(false));
    dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('login_failed'), type: 'error' }));
    dispatch(incrementLoginAttempts());
    return rejectWithValue(i18n.t('login_failed'));
  }
  dispatch(setLoading(false));
  dispatch(setAlert({ title: i18n.t('success'), message: i18n.t('login_success'), type: 'success' }));
  return jsonData;
});

export const sendEmailResetPassword = createAsyncThunk(
  'auth/sendEmailResetPassword',
  async (data: LoginSchema, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await fetch('https://te11api.herokuapp.com/user/reset-password', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status > 400) {
      dispatch(setLoading(false));
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('send_email_reset_password_failed'), type: 'error' }));
    } else {
      dispatch(setLoading(false));
      dispatch(
        setAlert({
          title: i18n.t('success'),
          message: i18n.t('send_email_reset_password_success_please_check_your_inbox'),
          type: 'success',
        }),
      );
    }
  },
);

export const getCurrentUserData = createAsyncThunk('auth/getCurrentUserData', async (_, { dispatch }) => {
  dispatch(setLoading(true));

  const tokenUser = localStorage.getItem('tokenUser');
  const response = await fetch('https://te11api.herokuapp.com/user', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tokenUser }),
  });

  try {
    const jsonData = await response.json();
    if (response.status < 200 || response.status >= 300) {
      dispatch(setLoading(false));
      dispatch(
        setAlert({
          title: i18n.t('you_are_not_logged_in'),
          message: i18n.t('you_should_login_to_get_more_infomation'),
          type: 'warning',
        }),
      );
      return null;
    }

    dispatch(setLoading(false));
    dispatch(setIsLogin(true));
    dispatch(setAlert({ title: i18n.t('success'), message: i18n.t('login_success'), type: 'success' }));
    return jsonData;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(
      setAlert({
        title: i18n.t('you_are_not_logged_in'),
        message: i18n.t('you_should_login_to_get_more_infomation'),
        type: 'warning',
      }),
    );
    return null;
  }
});

export const register = createAsyncThunk('auth/register', async (data: LoginSchema, { dispatch }) => {
  dispatch(setLoading(true));
  const response = await fetch('https://te11api.herokuapp.com/user/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  dispatch(setLoading(false));
  const status = response.status;
  if (status >= 400) {
    if (response.status === 401) {
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('account_already_exists'), type: 'error' }));
    } else if (response.status === 402) {
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('email_already_exists'), type: 'error' }));
    } else {
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('register_failed'), type: 'error' }));
    }
    dispatch(incrementRegisterAttempts());
  }
  else{
    const jsonData = await response.json();
    dispatch(setAlert({ title: i18n.t('success'), message: i18n.t('register_success'), type: 'success' }));
    dispatch(closeRegisterModal());
    dispatch(turnOffReCaptchaRegister());
    return jsonData;
  }
});
