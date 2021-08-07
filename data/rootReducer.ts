// Copyright © ST-Keys, 2021. All rights reserved. Licence included in the root folder of this repository.

import { combineReducers } from "@reduxjs/toolkit";

import { fileReducer } from "./slices/fileSlice/fileSlice";
import { statusReducer } from "./slices/statusSlice/statusSlice";

const rootReducer = combineReducers({
  status: statusReducer,
  files: fileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
