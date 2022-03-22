import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAlert } from 'store/slices/alert';
import i18n from 'i18n';
import { setLoading } from 'store/slices/common';
import { NotifState } from 'store/slices/notif';

export interface NotifPageState {
  page: number;
  perPage?: number;
}

export const setNotifRead = createAsyncThunk('notif/read', async (data: string, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const tokenUser = localStorage.getItem('tokenUser');
    const res = await fetch('https://te11api.herokuapp.com/notif/read', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notifId: data, tokenUser }),
    });
    dispatch(setLoading(false));

    if (res.status < 200 || res.status >= 300) {
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('set_notification_read_failed'), type: 'error' }));
      return false;
    }
    return data;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('set_notification_read_failed'), type: 'error' }));
  }
});
export const setNotifView = createAsyncThunk('notif/view', async (data: Array<string>, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const tokenUser = localStorage.getItem('tokenUser');
    const res = await fetch('https://te11api.herokuapp.com/notif/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notifIds: data, tokenUser }),
    });
    dispatch(setLoading(false));

    if (res.status < 200 || res.status >= 300) {
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('set_notification_read_failed'), type: 'error' }));
      return false;
    }
    return data;
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('set_notification_read_failed'), type: 'error' }));
  }
});

export const getNotifsInfo = createAsyncThunk('notif', async (data: NotifPageState, { dispatch, getState }) => {
  try {
    dispatch(setLoading(true));
    const { notif } = getState() as { notif: NotifState };
    const tokenUser = localStorage.getItem('tokenUser');
    const res = await fetch('https://te11api.herokuapp.com/notif', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, tokenUser }),
    });
    dispatch(setLoading(false));

    const jsonData = await res.json();
    if (notif.notifs.length > 0) {
      const viewedIds = notif.notifs.map((notifItem) => notifItem._id);
      dispatch(setNotifView(viewedIds));
    }
    if (res.status < 200 || res.status >= 300) {
      dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('get_notification_failed'), type: 'error' }));
    }
    return { ...data, ...jsonData };
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setAlert({ title: i18n.t('error'), message: i18n.t('get_notification_failed'), type: 'error' }));
  }
});
