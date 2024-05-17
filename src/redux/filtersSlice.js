import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isLoading: false,
  isError: false,
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.name,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const { selectNameFilter } = filterSlice.selectors;
