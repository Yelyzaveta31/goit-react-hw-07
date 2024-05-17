import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from "./contactsOps.js";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.isError,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          (state.isLoading = true), (state.error = null);
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          (state.isLoading = false), (state.error = null);
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { error }) => {
          (state.isLoading = false), (state.error = error);
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { selectContacts, selectIsLoading, selectIsError } =
  contactsSlice.selectors;
