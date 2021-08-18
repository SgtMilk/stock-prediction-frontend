import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";
import { predictStock } from "../../../backendCalls";

export interface Stock {
  id: number;
  name: string;
  mode: number;
  graphData?: Array<{
    date: string;
    price: number;
  }>;
}

const stocksAdapter = createEntityAdapter<Stock>();

const stockSlice = createSlice({
  name: "stocks",
  initialState: stocksAdapter.getInitialState(),
  reducers: {
    addStock: stocksAdapter.addOne,
    setStocks: stocksAdapter.setAll,
    removeStock: stocksAdapter.removeOne,
    updateStock: stocksAdapter.setOne,
  },
});

export const stockReducer = stockSlice.reducer;
export const selectors = {
  ...stocksAdapter.getSelectors<RootState>((state) => state.stocks),
};
export const actions = stockSlice.actions;
