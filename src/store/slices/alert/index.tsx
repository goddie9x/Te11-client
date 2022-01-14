import { createSlice } from '@reduxjs/toolkit';

export interface AlertState {
  open: boolean;
  type: string;
  title: string;
  message: string;
}

const initialState: AlertState = {
  open: false,
  type: '',
  title: '',
  message: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.open = true;
      state.type = payload.type;
      state.title = payload.title;
      state.message = payload.message;
    },
    clearAlert: (state) => {
      state.open = false;
      state.type = '';
      state.title = '';
      state.message = '';
    },
  },
});

const { actions, reducer } = alertSlice;

export const { setAlert, clearAlert } = actions;
export { reducer as alertReducer };
