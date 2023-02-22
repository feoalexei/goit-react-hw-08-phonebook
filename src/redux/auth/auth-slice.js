import { signUpThunk } from './auth-thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
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
      });
  },
});

export const authReducer = authSlice.reducer;
