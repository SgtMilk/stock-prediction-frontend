import { RootState, Stocks, Status } from "../../data";
import axios from "axios";
import { baseURL } from "..";

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
  dispatch(Stocks.actions.removeStock(stockId));
  try {
    const response = await axios.delete(
      baseURL +
        `/portfolios/${Status.selectors.getSelectedPortfolio(
          state
        )}/stocks/${stockId}`
    );
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
