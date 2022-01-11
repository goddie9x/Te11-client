import { createSlice } from '@reduxjs/toolkit';
import { Language } from 'constants/enum/language';
import i18n from 'i18n';

export interface CommonState {
  isDarkMode: boolean;
  language: Language;
}

const initialState: CommonState = {
  isDarkMode: false,
  language: Language.EN_US,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setDarkMode: (state, { payload }) => {
      state.isDarkMode = payload;
      localStorage.setItem('isDarkMode', payload);
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
      i18n.changeLanguage(payload);
      localStorage.setItem('language', payload);
    },
  },
});

const {reducer, actions} = commonSlice;

export const {setDarkMode} = actions;
export const {setLanguage} = actions;
export {reducer as commonReducer};