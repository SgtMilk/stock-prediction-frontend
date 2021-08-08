import { combineReducers } from "@reduxjs/toolkit";

import { statusReducer } from "./slices/statusSlice/statusSlice";
import { stockReducer } from "./slices/stockSlice/stockSlice";

const rootReducer = combineReducers({
  status: statusReducer,
  stocks: stockReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
