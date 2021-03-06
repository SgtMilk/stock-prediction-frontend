// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import axios from "axios";
import { baseURL } from "backendCalls";
import { Stocks } from "data";

interface graphData {
  date: string;
  price: number;
}

/**
 * Given a stock, this function will call the backend to predict stock prices for the stock associated to it
 * @param stock (the stock to predict from)
 * @param dispatch (redux dispatch function)
 * @returns a promise of a boolean
 */
export const predictStock = async (
  stock: Stocks.Stock,
  dispatch: (...props: any) => any
): Promise<boolean | undefined> => {
  if (typeof window === "undefined") return false;
  try {
    const response = await axios.get(
      baseURL + `/predict/${stock.name}/${stock.num_days}/${stock.interval}`
    );
    const graphData: graphData[] = response.data;
    dispatch(
      Stocks.actions.updateStock({
        ...stock,
        graphData,
      })
    );
    return true;
  } catch (err) {
    console.error(`${err}`);
    return false;
  }
};
