import { Portfolios, RootState, Status } from "data";
import { baseURL } from "backendCalls";
import axios from "axios";

/**
 * Deleted a portfolio in the backend
 * @param id (string, the portfolio's id)
 * @param state (redux state of type Rootstate)
 * @param dispatch (the redux dispatch function)
 * @returns a promise of a boolean
 */
export const deletePortfolio = async (
  id: string,
  state: RootState,
  dispatch: (...props: any) => any
): Promise<boolean | undefined> => {
  if (typeof window === "undefined") return false;
  try {
    const response = await axios.delete(baseURL + `/portfolios/${id}`);
    if (response.status === 200) {
      const portfolios: Portfolios.Portfolio[] = response.data.portfolios;

      // removing that portfolio in our local state
      dispatch(Portfolios.actions.removePortfolio(id));
      if (Status.selectors.getSelectedPortfolio(state) === id) {
        const portfolioList = Object.values(portfolios);
        if (portfolioList[0])
          dispatch(Status.actions.setSelectedPorfolio(portfolioList[0].id));
        else dispatch(Status.actions.setSelectedPorfolio(""));
      }
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
