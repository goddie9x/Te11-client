import { createSlice } from '@reduxjs/toolkit';
import { getNotifsInfo } from 'store/thunk/notif';
import unionBy from 'lodash/unionBy';

export interface NotifSchema {
  _id: string;
  userNameAthor?: string;
  userAthorAvatar?: string;
  url: string;
  content?: string;
  //1: post, 2:news, 3: schedule, 4: exam,  5: comment, 6: like, 7: follow, 8: message,
  type?: number;
  readed?: string;
  forAll?: boolean;
  forUserIds?: string[];
  createdAt?: string;
}

export interface NotifState {
  notifs: Array<NotifSchema>;
  amountNotifsNotRead?: number;
  page: number;
  perPage?: number;
}

const initialState: NotifState = {
  notifs: [],
  page: 1,
};

const createSliceNotif = createSlice({
  name: 'notif',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotifsInfo.fulfilled, (state, action) => {
      state.notifs = unionBy(action.payload.notifs, state.notifs, '_id');
      state.amountNotifsNotRead = action.payload.amountNotifsNotRead;
      state.page = action.payload.page;
      state.perPage = action.payload.perPage;
    });
  },
});

const { reducer } = createSliceNotif;
export { reducer as notifReducer };
