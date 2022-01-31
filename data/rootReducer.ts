// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import { combineReducers } from "@reduxjs/toolkit";

import { statusReducer } from "./slices/statusSlice/statusSlice";
import { stockReducer } from "./slices/stockSlice/stockSlice";
import { portfolioReducer } from "./slices/portfolioSlice/portfolioSlice";

const rootReducer = combineReducers({
  status: statusReducer,
  portfolios: portfolioReducer,
  stocks: stockReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
