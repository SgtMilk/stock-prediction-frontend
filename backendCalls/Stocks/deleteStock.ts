// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import { RootState, Status, Portfolios } from "data";
import axios from "axios";
import { baseURL } from "backendCalls";

/**
 * Call to backend to delete a stock
 * @param stockId (string, the id of the stock)
 * @param state (the redux state as RootState)
 * @param dispatch (the redux dispatch function)
 * @returns a promise of a boolean
 */
export const deleteStock = async (
  stockId: string,
  state: RootState,
  dispatch: (...args: any) => any
): Promise<boolean | undefined> => {
  if (typeof window === "undefined") return false;
  try {
    const response = await axios.delete(
      baseURL +
        `/portfolios/${Status.selectors.getSelectedPortfolio(
          state
        )}/stocks/${stockId}`
    );
    if (response.status === 200) {
      const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
      dispatch(Portfolios.actions.setPortfolios(portfolios));
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
