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

const specialActions = {
  ADD_STOCK: (
    stock: Stock,
    state: RootState,
    dispatch: (...args: any) => any
  ) => {
    stocksAdapter.addOne(state.stocks, stock);
    predictStock(stock, dispatch);
  },
  SET_STOCKS: (stocks: Stock[], dispatch: (...args: any) => any) => {
    dispatch(stockSlice.actions.setStocks(stocks));
    stocks.forEach((stock) => predictStock(stock, dispatch));
  },
};
export const actions = { ...stockSlice.actions, ...specialActions };
