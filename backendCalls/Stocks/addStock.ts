// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { Stocks, Portfolios, Status, RootState } from "data";
import axios from "axios";
import { baseURL } from "backendCalls";
import { predictStock } from "backendCalls";

/**
 * Will do a call to the backend to create a stock to include in the selected portfolio.
 * @param name (string, the name of the stock)
 * @param mode (number, the mode of the stock)
 * @param state (the redux state as RootState)
 * @param dispatch (the redux dispatch function)
 * @returns a promise of a boolean
 */
export const addStock = async (
  name: string,
  mode: number,
  state: RootState,
  dispatch: (...props: any) => any
) => {
  if (typeof window === "undefined") return false;
  const response = await addBackend(name, mode, state, dispatch);
  if (response) {
    trainStock(response, dispatch);
    return true;
  }
};

const addBackend = async (
  name: string,
  mode: number,
  state: RootState,
  dispatch: (...props: any) => any
): Promise<Stocks.Stock | undefined> => {
  if (mode < 1) {
    console.error("impossible value for mode");
    return undefined;
  }
  try {
    const response = await axios.post(
      baseURL +
        `/portfolios/${Status.selectors.getSelectedPortfolio(
          state
        )}/stocks/${name}/${mode}`
    );
    if (response.status === 200) {
      const new_stock: Stocks.Stock = response.data.new_stock;
      const portfolios: Portfolios.Portfolio[] = Object.values(
        response.data.portfolios
      );
      dispatch(Portfolios.actions.setPortfolios(portfolios));
      dispatch(Stocks.actions.addStock(new_stock));
      return new_stock;
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const trainStock = (
  new_stock: Stocks.Stock,
  dispatch: (...props: any) => any
) => {
  predictStock(new_stock, dispatch);
};
