import { createSlice } from '@reduxjs/toolkit';

import { login, register, getCurrentUserData } from 'store/thunk/auth';
export interface UserDataSchema {
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  account: string;
  gender?: number;
  dateOfBirth?: string;
  role: number;
  image?: string;
  quote?: string;
  description?: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  isLogining: boolean;
  userData?: UserDataSchema;
  isOpenLoginModal: boolean;
  isOpenRegisterModal: boolean;
  numberOfLoginAttempts: number;
  numberOfRegisterAttempts: number;
  turnOnReCaptchaLogin: boolean;
  turnOnReCaptchaRegister: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLogining: false,
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
      state.isLoggedIn = payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = undefined;
      document.cookie =  'tokenUser=; Max-Age=0';
    },
    openLoginModal: (state, { payload }) => {
      state.isOpenLoginModal = payload;
      state.isOpenRegisterModal = payload ? false : state.isOpenRegisterModal;
    },
    closeLoginModal: (state) => {
      state.isOpenLoginModal = false;
    },
    openRegisterModal: (state, { payload }) => {
      state.isOpenRegisterModal = payload;
      state.isOpenLoginModal = payload ? false : state.isOpenLoginModal;
    },
    closeRegisterModal: (state) => {
      state.isOpenRegisterModal = false;
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
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogining = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLogining = false;
      state.isLoggedIn = true;
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
      document.cookie = 'tokenUser=' + payload.token + ';max-age=86400';
    });
    builder.addCase(login.rejected, (state) => {
      state.isLogining = false;
    });
    builder.addCase(getCurrentUserData.pending, (state) => {
      state.isLogining = true;
    });
    builder.addCase(getCurrentUserData.fulfilled, (state, { payload }) => {
      if(payload){
        state.isLogining = false;
        state.isLoggedIn = true;
        state.userData = payload;
      }
    });
    builder.addCase(register.pending, (state) => {
      state.isLogining = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isLogining = false;
      state.isLoggedIn = true;
      state.isOpenLoginModal = false;
      state.isOpenRegisterModal = false;
      document.cookie = 'tokenUser=' + payload.token + ';max-age=86400';
    });
    builder.addCase(register.rejected, (state) => {
      state.isLogining = false;
    });
  },
});

const { actions, reducer } = authSlice;

export const {
  setIsLogin,
  logout,
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal,
  incrementLoginAttempts,
  incrementRegisterAttempts,
  turnOffReCaptchaRegister,
  turnOffReCaptchaLogin,
} = actions;
export { reducer as authReducer };
