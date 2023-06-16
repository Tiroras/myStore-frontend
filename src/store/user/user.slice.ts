import { checkAuth, login, logout, register } from './user.actions';
import { createSlice } from '@reduxjs/toolkit';
import { IUserInitialState } from 'types/user.types';
import { getLocalStorage } from 'utils/localStorage';

const initialState: IUserInitialState = {
  user: getLocalStorage('user') ? getLocalStorage('user') : null,
  loading: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.loading = true;
    }),
      builder
        .addCase(register.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
        })
        .addCase(register.rejected, state => {
          state.loading = false;
          state.user = null;
        })
        //
        .addCase(login.pending, state => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
        })
        .addCase(login.rejected, state => {
          state.loading = false;
          state.user = null;
        })
        //
        .addCase(logout.fulfilled, state => {
          state.loading = false;
          state.user = null;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
          state.user = action.payload.user;
        });
  }
});
