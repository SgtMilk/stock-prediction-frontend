import React, { ReactElement } from "react";
import { Titlebar, Portfolio } from "../components";
import { mainpage } from "../style";
import { useFetchPortfolios } from "./helpers/fetch";
import { Provider, useSelector } from "react-redux";
import { Stocks, createEmptyStore } from "../data";

/**
 * This is the "/" page in the router.
 * It starts the redux provider
 * @constructor
 */
const index = (): ReactElement => {
  const store = createEmptyStore();
  return (
    <Provider store={store}>
      <Mainpage />
    </Provider>
  );
};

/**
 * This component displays the titlebar and portfolio
 * @constructor
 */
export const Mainpage = (): ReactElement => {
  useFetchPortfolios();

  const stocks = useSelector(Stocks.selectors.selectAll);
  const stockIds = stocks.map((stock) => stock.id);

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Titlebar />
      <Portfolio stockIds={stockIds} style={mainpage.objectCSS.portfolio} />
    </div>
  );
};

export default index;
