import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: localStorage.getItem("isAuth"),
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("isAuth", action.payload);
      console.log("action.payload", action.payload);
    },
  },
});

export const { setAuth } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth.value;

export default authSlice.reducer;
