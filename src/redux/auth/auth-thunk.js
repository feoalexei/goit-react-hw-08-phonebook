import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authHeader,
  refreshUserService,
  signInService,
  SignOutService,
  signUpService,
} from 'services/auth-api';
import { omit } from 'lodash';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const data = await signUpService(credentials);
      dispatch(signInThunk(omit(credentials, ['name'])));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signInService(credentials);
      authHeader.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue('no token was passed');
      }
      authHeader.set(savedToken);

      const data = await refreshUserService();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await SignOutService();
      authHeader.clear();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
