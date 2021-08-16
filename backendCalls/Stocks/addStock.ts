import { Stocks, Portfolios, Status, RootState } from "../../data";
import axios from "axios";
import { baseURL } from "..";

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
): Promise<boolean | undefined> => {
  if (mode < 1) {
    console.error("impossible value for mode");
    return false;
  }
  try {
    const response = await axios.post(
      baseURL +
        `/portfolios/${Status.selectors.getSelectedPortfolio(
          state
        )}/stocks/${name}/${mode}`
    );
    if (response.status === 200) {
      const stocks: Stocks.Stock[] = response.data.stocks;
      const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
      dispatch(Stocks.actions.setStocks(stocks));
      dispatch(Portfolios.actions.setPortfolios(portfolios));
      return true;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};
