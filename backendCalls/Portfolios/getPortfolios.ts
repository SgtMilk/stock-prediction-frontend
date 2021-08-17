import axios from "axios";
import { Portfolios, Stocks, Status } from "data";
import { baseURL } from "backendCalls";

/**
 * Gets all the portfolios and stocks from the backend
 * @param dispatch (redux dispatch function)
 * @returns a promise of a boolean
 */
export const getPortfolios = async (
  dispatch: (...props: any) => any
): Promise<boolean | undefined> => {
  try {
    const response = await axios.get(baseURL + "/portfolios");
    const portfolios: Portfolios.Portfolio[] = Object.values(
      response.data.portfolios
    );
    const stocks: Stocks.Stock[] = Object.values(response.data.stocks);
    Stocks.actions.SET_STOCKS(stocks, dispatch);
    dispatch(Portfolios.actions.setPortfolios(portfolios));
    if (portfolios[0])
      dispatch(Status.actions.setSelectedPorfolio(portfolios[0].id));
    else dispatch(Status.actions.setSelectedPorfolio(""));
    return true;
  } catch (err) {
    console.error(`${err}`);
    return false;
  }
};
