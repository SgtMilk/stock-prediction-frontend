// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import React, { FC, ReactElement } from "react";
import { objectCSS } from "./stylesheet";
import { useDispatch, useSelector } from "react-redux";
import { Portfolios, RootState, Status } from "data";
import { deletePortfolio } from "backendCalls";

export interface PortfolioBlockProps {
  portfolio: Portfolios.Portfolio;
  closeMenu: () => void;
  style?: React.CSSProperties;
}

/**
 * This block displays a portfolio and it's actions.
 * If you click on the name of the portfolio, this portfolio will be set as the selected portfolio in the state.
 * If you click on the `x`, it will delete the portfolio both in the state, and in the backend.
 * @param portfolio (the portfolio to display)
 * @param closeMenu (function to close the menu)
 * @param style (React.CSSProperties object, optional)
 * @constructor
 */
export const PortfolioBlock: FC<PortfolioBlockProps> = ({
  portfolio,
  closeMenu,
  style = {},
}): ReactElement => {
  // All the redux stuff
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  return (
    <div style={{ ...objectCSS.box, ...style }}>
      <div
        className="portfolioSelection"
        onClick={() => {
          dispatch(Status.actions.setSelectedPorfolio(portfolio.id));
          closeMenu();
        }}
        style={objectCSS.portfolioSelect}
      >
        {portfolio.name}
      </div>
      <div
        className="portfolioSelection"
        onClick={async () =>
          await deletePortfolio(portfolio.id, state, dispatch)
        }
        style={objectCSS.portfolioDelete}
      >
        x
      </div>
    </div>
  );
};
