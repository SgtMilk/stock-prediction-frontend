import React, { ReactElement, useState } from "react";
import { Titlebar, Portfolio } from "../components";
import { mainpage } from "../style";
import { FetchPortfolios } from "./helpers/fetch";
import { Provider, useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const [fetched, setFetched] = useState<boolean>(false);
  if (!fetched) {
    FetchPortfolios(dispatch);
    setFetched(true);
  }

  const stocks = useSelector(Stocks.selectors.selectAll);
  const stockIds = stocks.map((stock) => stock.id);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        ...mainpage.objectCSS.portfolio,
      }}
    >
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 0;  /* Remove scrollbar space */
          background: transparent;  /* Optional: just make scrollbar invisible */
      }
      `}</style>
      <Titlebar />
      <Portfolio stockIds={stockIds} style={mainpage.objectCSS.portfolio} />
    </div>
  );
};

export default index;
