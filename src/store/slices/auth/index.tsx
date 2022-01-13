import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLogin: boolean;
  isOpenLoginModal: boolean;
  isOpenRegisterModal: boolean;
  numberOfLoginAttempts: number;
  numberOfRegisterAttempts: number;
  turnOnReCaptchaLogin: boolean;
  turnOnReCaptchaRegister: boolean;
}

const initialState: AuthState = {
  isLogin: false,
  isOpenLoginModal: false,
  isOpenRegisterModal: false,
  numberOfLoginAttempts: 0,
  numberOfRegisterAttempts: 0,
  turnOnReCaptchaLogin: false,
  turnOnReCaptchaRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
    openLoginModal: (state, { payload }) => {
      state.isOpenLoginModal = payload;
      state.isOpenRegisterModal = payload ? false : state.isOpenRegisterModal;
    },
    openRegisterModal: (state, { payload }) => {
      state.isOpenRegisterModal = payload;
      state.isOpenLoginModal = payload ? false : state.isOpenLoginModal;
    },
    incrementLoginAttempts: (state) => {
      state.numberOfLoginAttempts++;
      if (state.numberOfLoginAttempts >= 3) {
        state.turnOnReCaptchaLogin = true;
      }
    },
    incrementRegisterAttempts: (state) => {
      state.numberOfRegisterAttempts++;
      if (state.numberOfRegisterAttempts >= 3) {
        state.turnOnReCaptchaRegister = true;
      }
    },
    turnOffReCaptchaRegister: (state) => {
      state.turnOnReCaptchaRegister = false;
      state.numberOfRegisterAttempts = 0;
    },
    turnOffReCaptchaLogin: (state) => {
      state.turnOnReCaptchaLogin = false;
      state.numberOfLoginAttempts = 0;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  setIsLogin,
  openLoginModal,
  openRegisterModal,
  incrementLoginAttempts,
  incrementRegisterAttempts,
  turnOffReCaptchaRegister,
  turnOffReCaptchaLogin,
} = actions;
export { reducer as authReducer };
