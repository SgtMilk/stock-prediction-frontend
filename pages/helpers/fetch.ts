import axios from "axios";
import { useDispatch } from "react-redux";
import { Stocks } from "../../data";

const baseURL = "";

interface stock {
  name: string;
  mode: number;
}

interface graphData {
  date: string;
  price: number;
}

export const fetchStock = async (stock: Stocks.Stock) => {
  try {
    const response = await axios.get(
      baseURL + `/predict/${stock.name}/${stock.mode}`
    );
    const graphData: graphData[] = response.data;
    const dispatch = useDispatch();
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

export const useFetchPortfolios = async () => {
  try {
    const response = await axios.get(baseURL + "/portfolios");
    const dispatch = useDispatch();
    const portfolios: stock[] = response.data;
    const stocks: Stocks.Stock[] = portfolios.map((stock, index) => ({
      id: index,
      ...stock,
    }));
    dispatch(Stocks.actions.setStocks(stocks));
    stocks.forEach((stock) => fetchStock(stock));
  } catch (err) {
    console.error(err);
  }
};
