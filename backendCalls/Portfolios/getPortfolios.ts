import axios from "axios";
import { Portfolios, Stocks, Status } from "../../data";
import { baseURL } from "..";

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
    const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
    const stocks: Stocks.Stock[] = response.data.stocks;
    dispatch(Stocks.actions.setStocks(stocks));
    dispatch(Portfolios.actions.setPortfolios(portfolios));
    const portfolioList = Object.values(portfolios);
    if (portfolioList[0])
      dispatch(Status.actions.setSelectedPorfolio(portfolioList[0].id));
    // stocks.forEach((stock) => fetchStock(stock, dispatch));  // TODO: fix stock prediction
    return true;
  } catch (err) {
    console.error(`${err}`);
    return false;
  }
};
