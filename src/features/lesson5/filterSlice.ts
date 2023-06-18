import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface filterState {
  value: any;
}

const initialState: filterState = {
  value: JSON.parse(localStorage.getItem("checklist")) || [
    "Id",
    "Title",
    "Description",
    "Price",
    "Rating",
    "Brand",
    "Thumbnail",
  ],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const selectCount = (state: RootState) => state.auth.value;

export default filterSlice.reducer;
