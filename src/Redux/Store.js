import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stored_reducer";

export const store = configureStore({
  reducer: {
    users_reducer: counterReducer,
  },
});
