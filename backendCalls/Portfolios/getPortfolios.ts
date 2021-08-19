import axios from "axios";
import { Portfolios, Stocks, Status, RootState } from "data";
import { baseURL } from "backendCalls";
import { predictStock } from "backendCalls";

/**
 * Gets all the portfolios and stocks from the backend
 * @param dispatch (redux dispatch function)
 * @returns a promise of a boolean
 */
export const getPortfolios = async (
  state: RootState,
  dispatch: (...props: any) => any
): Promise<boolean | undefined> => {
  if (typeof window === "undefined") return false;
  const response = await getBackend(state, dispatch);
  if (response) {
    trainBackend(response, dispatch);
    return true;
  }
};

const getBackend = async (
  state: RootState,
  dispatch: (...props: any) => any
): Promise<Stocks.Stock[] | undefined> => {
  try {
    const response = await axios.get(baseURL + "/portfolios");
    if (response.status === 200) {
      const portfolios: Portfolios.Portfolio[] = Object.values(
        response.data.portfolios
      );
      const stocks: Stocks.Stock[] = Object.values(response.data.stocks);
      dispatch(Stocks.actions.setStocks(stocks));
      dispatch(Portfolios.actions.setPortfolios(portfolios));
      if (portfolios[0] && Status.selectors.getSelectedPortfolio(state) == "")
        dispatch(Status.actions.setSelectedPorfolio(portfolios[0].id));
      return stocks;
    }
  } catch (err) {
    console.error(`${err}`);
    return undefined;
  }
};

const trainBackend = (
  stocks: Stocks.Stock[],
  dispatch: (...props: any) => any
) => {
  stocks.map((stock) => predictStock(stock, dispatch));
};
