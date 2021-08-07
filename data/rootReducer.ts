import { combineReducers } from "@reduxjs/toolkit";

import { statusReducer } from "./slices/statusSlice/statusSlice";

const rootReducer = combineReducers({
  status: statusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
