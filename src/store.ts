import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import filterReducer from "./features/lesson5/filterSlice";
import toDoReducer from "./features/lesson7/toDoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    todo: toDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
