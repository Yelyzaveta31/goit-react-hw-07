import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6647292e51e227f23ab14f18.mockapi.io/",
});

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContactsThunk = createAsyncThunk(
  "contacts/addContacts",
  async (contact, thunkApi) => {
    try {
      const { data } = await instance.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
