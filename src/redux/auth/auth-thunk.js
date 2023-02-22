import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpService } from 'services/auth-api';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
