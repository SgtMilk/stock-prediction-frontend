// Copyright © ST-Keys, 2021. All rights reserved. Licence included in the root folder of this repository.

import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";

export const createStore = (initialState: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
