// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import { Portfolios } from "data";
import { baseURL } from "backendCalls";
import axios from "axios";

/**
 * Does a call to backend to add a new portfolio from the name stored in the local state
 * @param name (string, the name of the portfolio)
 * @param dispatch (react-redux dispatch function)
 * @returns a promise of a boolean
 */
export const addPortfolio = async (
  name: string,
  dispatch: (...props: any) => any
): Promise<boolean | undefined> => {
  if (typeof window === "undefined") return false;
  if (name === "") {
    console.error("No Input");
    return false;
  }
  try {
    const response = await axios.post(baseURL + `/portfolios/${name}`);
    if (response.status === 200) {
      const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
      dispatch(Portfolios.actions.setPortfolios(portfolios));
      return true;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};
