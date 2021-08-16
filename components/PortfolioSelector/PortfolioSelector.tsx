import React, { FC, ReactElement, useState } from "react";
import { Button, Input } from "../../globalComponents";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Portfolios, Status } from "../../data";
import { objectCSS } from "./stylesheet";
import axios from "axios";

export interface PortfolioSelectorProps {
  closeMenu: () => void;
  style?: React.CSSProperties;
}

const baseURL = "http://localhost:8000";

/**
 * Side panel for portfolio selection and creation
 * @param closeMenu (function to close meny)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const PortfolioSelector: FC<PortfolioSelectorProps> = ({
  closeMenu,
  style = {},
}): ReactElement => {
  // All the local state stuff
  const [value, setValue] = useState<string>("");

  // All the redux stuff
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const portfolios: Portfolios.Portfolio[] = Portfolios.selectors.selectAll(
    state
  );

  /**
   * Does a call to backend to add a new portfolio from the name stored in the local state
   */
  const addPortfolio = async () => {
    if (value === "") {
      console.log("No Input");
      return;
    }
    try {
      const response = await axios.post(baseURL + `/portfolios/${value}`);
      if (response.status === 200) {
        const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
        dispatch(Portfolios.actions.setPortfolios(portfolios));
        setValue("");
      }
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * callback to delete a portfolio in the backend
   * @param id (the portfolio's id)
   */
  const deletePortfolio = async (id: string) => {
    try {
      const response = await axios.delete(baseURL + `/portfolios/${id}`);
      if (response.status === 200) {
        const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
        dispatch(Portfolios.actions.setPortfolios(portfolios));
        if (Status.selectors.getSelectedPortfolio(state) === id)
          dispatch(Status.actions.setSelectedPorfolio(""));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ ...objectCSS.box, ...style }}>
      <style>{`
        .portfolioSelection:hover {
            filter: brightness(1.5);
        }
      `}</style>
      {portfolios.map((portfolio, i) => (
        <div style={{ ...objectCSS.textBox, ...objectCSS.subBox }} key={i}>
          <div
            className="portfolioSelection"
            onClick={() => {
              dispatch(Status.actions.setSelectedPorfolio(portfolio.id));
              closeMenu();
            }}
            style={{ ...objectCSS.textBox, ...objectCSS.subBox, width: "95%" }}
          >
            {portfolio.name}
          </div>
          <div
            className="portfolioSelection"
            onClick={() => deletePortfolio(portfolio.id)}
            style={{ ...objectCSS.textBox, ...objectCSS.subBox, width: "5%" }}
          >
            x
          </div>
        </div>
      ))}
      <Input.String.StringInput
        name="portfolio_name"
        style={objectCSS.subBox}
        placeholder="portfolio name"
        value={value}
        updateValue={setValue}
      />
      <Button onClick={addPortfolio} style={objectCSS.subBox}>
        Add Portfolio
      </Button>
    </div>
  );
};
