// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import React, { ReactElement, useState } from "react";
import {
  Titlebar,
  Portfolio,
  StockActionPanel,
  PortfolioSelector,
} from "../components";
import { mainpage, animations } from "style";
import { getPortfolios } from "backendCalls";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Portfolios, createEmptyStore, RootState, Status } from "data";

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
  // state stuff
  const dispatch = useDispatch();
  const [fetched, setFetched] = useState<boolean>(false);
  const [panelOpened, setPanelOpened] = useState<boolean>(false);
  const [panelAnimation, setPanelAnimation] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [menuAnimation, setMenuAnimation] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state);

  const selectedPortfolio = Portfolios.selectors.selectById(
    state,
    Status.selectors.getSelectedPortfolio(state)
  );
  let stockIds = selectedPortfolio?.stocks;
  if (!stockIds) stockIds = [];

  // getting information from backend
  if (fetched == false) {
    setFetched(true);
    getPortfolios(state, dispatch);
  }

  // all the animation stuff
  if (!panelAnimation)
    setTimeout(function () {
      setPanelOpened(false);
    }, animations.animationTime * 1000);

  if (!menuAnimation)
    setTimeout(function () {
      setMenuOpened(false);
    }, animations.animationTime * 1000);

  return (
    <div style={mainpage.objectCSS.box}>
      <style>{mainpage.pageCSS}</style>
      <Titlebar
        menuFunction={
          menuOpened === menuAnimation
            ? () => {
                console.log("triggered");
                setMenuAnimation(!menuOpened);
                if (!menuAnimation) setMenuOpened(true);
              }
            : () => {
                setMenuAnimation(false);
                if (!menuAnimation) setMenuOpened(false);
              }
        }
        refreshFunction={() => setFetched(false)}
      />
      <div style={mainpage.objectCSS.mainpage}>
        {menuOpened ? (
          <div style={mainpage.objectCSS.menu}>
            <PortfolioSelector
              animationState={menuAnimation}
              closeMenu={() => setMenuAnimation(false)}
            />
          </div>
        ) : null}
        {panelOpened ? (
          <div style={mainpage.objectCSS.panel}>
            <StockActionPanel
              animationState={panelAnimation}
              closeWindow={() => setPanelAnimation(false)}
              style={{ position: "absolute" }}
            />
          </div>
        ) : null}
        <Portfolio
          stockIds={stockIds}
          style={mainpage.objectCSS.portfolio}
          openAddStock={
            panelOpened === panelAnimation
              ? () => {
                  setPanelAnimation(!panelOpened);
                  if (!panelAnimation) setPanelOpened(true);
                }
              : () => {
                  setPanelOpened(false);
                  setPanelAnimation(false);
                }
          }
        />
      </div>
    </div>
  );
};

export default index;
