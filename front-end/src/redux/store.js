import { configureStore } from "@reduxjs/toolkit";
import toysReducer from "./toysSlice";

export default configureStore({
  reducer: {
    toys: toysReducer,
  },
});