// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export interface Portfolio {
  id: string;
  name: string;
  stocks: Array<string>;
}

const portfoliosAdapter = createEntityAdapter<Portfolio>();

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState: portfoliosAdapter.getInitialState(),
  reducers: {
    setPortfolios: portfoliosAdapter.setAll,
    removePortfolio: portfoliosAdapter.removeOne,
  },
});

export const portfolioReducer = portfolioSlice.reducer;
export const selectors = {
  ...portfoliosAdapter.getSelectors<RootState>((state) => state.portfolios),
};
export const actions = portfolioSlice.actions;
