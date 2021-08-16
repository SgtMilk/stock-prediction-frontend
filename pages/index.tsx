import React, { ReactElement, useState } from "react";
import {
  Titlebar,
  Portfolio,
  StockActionPanel,
  PortfolioSelector,
} from "../components";
import { mainpage } from "../style";
import { getPortfolios } from "../backendCalls";
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
    getPortfolios(dispatch);
    setFetched(true);
  }

  const selectedPortfolio = Portfolios.selectors.selectById(
    state,
    Status.selectors.getSelectedPortfolio(state)
  );
  let stockIds = selectedPortfolio?.stocks;
  if (!stockIds) stockIds = [];

  return (
    <div style={mainpage.objectCSS.box}>
      <style>{mainpage.pageCSS}</style>
      <Titlebar
        menuFunction={() => {
          setMenuOpened(!menuOpened);
          setPanelOpened(false);
        }}
        refreshFunction={() => setFetched(false)}
      />
      <div style={mainpage.objectCSS.mainpage}>
        {menuOpened ? (
          <div style={mainpage.objectCSS.menu}>
            <PortfolioSelector closeMenu={() => setMenuOpened(false)} />
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
