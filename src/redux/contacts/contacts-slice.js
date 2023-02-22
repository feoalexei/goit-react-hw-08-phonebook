import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contacts-thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(addContactThunk.pending, handlePending)

      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.rejected, handleRejected)
      .addCase(addContactThunk.rejected, handleRejected)

      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.items.push(payload);
      });
  },
});

export const contactReducer = contactSlice.reducer;
