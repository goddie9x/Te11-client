import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  isDarkMode: boolean;
}

const initialState: CommonState = {
  isDarkMode: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setDarkMode: (state, { payload }) => {
      state.isDarkMode = payload;
      localStorage.setItem('isDarkMode', payload);
    },
  },
});

const {reducer, actions} = commonSlice;

export const {setDarkMode} = actions;
export {reducer as commonReducer};