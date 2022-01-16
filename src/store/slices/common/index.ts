import { createSlice } from '@reduxjs/toolkit';
import { Language } from 'constants/enum/language';
import i18n from 'i18n';

export interface CommonState {
  isDarkMode: boolean;
  language: Language;
  isParticlesOn: boolean;
}

const initialState: CommonState = {
  isDarkMode: false,
  language: Language.EN_US,
  isParticlesOn: true,
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
    setParticlesMode: (state, { payload }) => {
      state.isParticlesOn = payload;
      localStorage.setItem('isParticlesOn', payload);
    },
    loadParticlesMode: (state) => {
      state.isParticlesOn = localStorage.getItem('isParticlesOn') !== 'false';
    },
  },
});

const { reducer, actions } = commonSlice;

export const { setDarkMode, setLanguage, setParticlesMode, loadParticlesMode } = actions;
export { reducer as commonReducer };
