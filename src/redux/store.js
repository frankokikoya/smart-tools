import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice, UserSlice, ErrorSlice } from "./states";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
    user: UserSlice,
    error: ErrorSlice
  },
});