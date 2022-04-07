import { configureStore } from "@reduxjs/toolkit";
import { todoSlice, userSlice } from "./states";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    user: userSlice,
  },
});