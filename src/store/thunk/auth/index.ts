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

interface LoginSchema {
  account: string;
  password: string;
}

export const login = createAsyncThunk('auth/login', async (data: LoginSchema, { dispatch, rejectWithValue }) => {
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
    dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('login_failed'), type: 'error' }));
    dispatch(incrementLoginAttempts());
    return rejectWithValue(i18n.t('login_failed'));
  }
  dispatch(setAlert({ title: i18n.t('success'), message: i18n.t('login_success'), type: 'success' }));
  return jsonData;
});

export const getCurrentUserData = createAsyncThunk('auth/getCurrentUserData', async (_, { dispatch }) => {
  const response = await fetch('https://te11api.herokuapp.com/user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    const jsonData = await response.json();
    if (response.status < 200 || response.status >= 300) {
      dispatch(
        setAlert({
          title: i18n.t('you_are_not_logged_in'),
          message: i18n.t('you_should_login_to_get_more_infomation'),
          type: 'warning',
        }),
      );
      return null;
    }

    dispatch(setIsLogin(true));
    dispatch(setAlert({ title: i18n.t('success'), message: i18n.t('login_success'), type: 'success' }));
    return jsonData;
  } catch (error) {
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

export const register = createAsyncThunk('auth/register', async (data: LoginSchema, { dispatch, rejectWithValue }) => {
  const response = await fetch('https://te11api.herokuapp.com/user/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const jsonData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('register_failed'), type: 'error' }));
    dispatch(incrementRegisterAttempts());
    rejectWithValue(i18n.t('register_failed'));
  }
  dispatch(setAlert({ title: i18n.t('success'), message: i18n.t('register_success'), type: 'success' }));
  dispatch(closeRegisterModal());
  dispatch(turnOffReCaptchaRegister());
  return jsonData;
});
