import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";

export const createStore = (initialState: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
