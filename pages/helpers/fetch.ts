import axios from "axios";
import { useDispatch } from "react-redux";
import { Stocks } from "../../data";

const baseURL = "http://localhost:8000";

interface stock {
  name: string;
  mode: number;
}

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
    console.error(err);
  }
};

export const FetchPortfolios = async (dispatch: (...props: any) => any) => {
  try {
    const response = await axios.get(baseURL + "/portfolios");
    const portfolios: stock[] = response.data;
    const stocks: Stocks.Stock[] = portfolios.map((stock, index) => ({
      id: index,
      ...stock,
    }));
    dispatch(Stocks.actions.setStocks(stocks));
    stocks.forEach((stock) => fetchStock(stock, dispatch));
  } catch (err) {
    console.error(err);
  }
};
