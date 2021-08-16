import axios from "axios";
import { Stocks, Portfolios, Status } from "../../data";

const baseURL = "http://localhost:8000";

interface graphData {
  date: string;
  price: number;
}

export const fetchStock = async (
  stock: Stocks.Stock,
  dispatch: (...props: any) => any
) => {
  try {
    const response = await axios.get(
      baseURL + `/predict/${stock.name}/${stock.mode}`
    );
    const graphData: graphData[] = response.data;
    dispatch(
      Stocks.actions.updateStock({
        ...stock,
        graphData,
      })
    );
  } catch (err) {
    console.error(`${err}`);
  }
};

export const FetchPortfolios = async (dispatch: (...props: any) => any) => {
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
  } catch (err) {
    console.error(`${err}`);
  }
};
