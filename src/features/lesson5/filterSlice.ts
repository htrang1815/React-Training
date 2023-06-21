import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface filterState {
  value: string[];
}
const checklistString = localStorage.getItem("checklist");

const initialState: filterState = {
  value: JSON.parse(
    checklistString ||
      '["Id", "Title", "Description", "Price", "Rating", "Brand", "Thumbnail"]'
  ),
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
