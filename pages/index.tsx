import React, { ReactElement, useState } from "react";
import {
  Titlebar,
  Portfolio,
  StockActionPanel,
  PortfolioSelector,
} from "../components";
import { mainpage } from "../style";
import { FetchPortfolios } from "./helpers/fetch";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Portfolios, createEmptyStore, RootState, Status } from "../data";

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
  const [panelOpened, setPanelOpened] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state);

  if (!fetched) {
    FetchPortfolios(dispatch);
    setFetched(true);
  }

  const selectedPortfolio = Portfolios.selectors.selectById(
    state,
    Status.selectors.getSelectedPortfolio(state)
  );
  let stockIds = selectedPortfolio?.stocks;
  if (!stockIds) stockIds = [];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        ...mainpage.objectCSS.portfolio,
      }}
    >
      <style>{mainpage.pageCSS}</style>
      <Titlebar
        menuFunction={() => {
          setMenuOpened(!menuOpened);
          setPanelOpened(false);
        }}
        style={{ position: "absolute" }}
        refreshFunction={() => setFetched(false)}
      />
      <div style={mainpage.objectCSS.mainpage}>
        {menuOpened ? (
          <div style={mainpage.objectCSS.menu}>
            <PortfolioSelector
              closeMenu={() => setMenuOpened(false)}
              style={{ position: "absolute" }}
            />
          </div>
        ) : null}
        {panelOpened ? (
          <div style={mainpage.objectCSS.panel}>
            <StockActionPanel
              closeWindow={() => setPanelOpened(false)}
              style={{ position: "absolute" }}
            />
          </div>
        ) : null}
        <Portfolio
          stockIds={stockIds}
          style={mainpage.objectCSS.portfolio}
          openAddStock={() => setPanelOpened(!panelOpened)}
        />
      </div>
    </div>
  );
};

export default index;
