import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface AuthState {
  value: boolean;
}
const initialState: AuthState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth.value;

export default authSlice.reducer;
