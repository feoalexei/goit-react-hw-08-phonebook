import {
  signInThunk,
  signUpThunk,
  refreshUserThunk,
  signOutThunk,
} from './auth-thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  token: null,
  isLoading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      //Sign Up
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //Sign In
      .addCase(signInThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //Refresh User
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      })
      .addCase(refreshUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      //Sign Out
      .addCase(signOutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = null;
      })
      .addCase(signOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
