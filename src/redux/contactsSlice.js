import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, addContactsThunk } from "./operations";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
