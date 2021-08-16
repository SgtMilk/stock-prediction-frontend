import React, { FC, ReactElement, useState } from "react";
import {
  FormInstance,
  FormInstanceProps,
  TYPE,
} from "../../globalComponents/BaseInputTypes/FormInstance";
import { Button } from "../../globalComponents";
import { useDispatch, useSelector } from "react-redux";
import { Stocks, Status, RootState, Portfolios } from "../../data";
import axios from "axios";
import { objectCSS } from "./stylesheet";

const baseURL = "http://localhost:8000";

export interface StockActionPanelProps {
  closeWindow: () => void;
  style?: React.CSSProperties;
}

/**
 * Central pop-up panel to add a stock to a portfolio
 * @param closeWindow (function to close the current window)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const StockActionPanel: FC<StockActionPanelProps> = ({
  closeWindow,
  style = {},
}): ReactElement => {
  // All the local state stuff
  const [name, setName] = useState<string>("");
  const [mode, setMode] = useState<number>(1);

  // All the redux stuff
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  /**
   * Will do a call to the backend to create a stock to include in the selected portfolio.
   */
  const addStock = async () => {
    if (mode < 1) {
      console.error("impossible value for mode");
      return;
    }
    try {
      const response = await axios.post(
        baseURL +
          `/portfolios/${Status.selectors.getSelectedPortfolio(
            state
          )}/stocks/${name}/${mode}`
      );
      if (response.status === 200) {
        const stocks: Stocks.Stock[] = response.data.stocks;
        const portfolios: Portfolios.Portfolio[] = response.data.portfolios;
        dispatch(Stocks.actions.setStocks(stocks));
        dispatch(Portfolios.actions.setPortfolios(portfolios));
        closeWindow();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // props to create the form instance
  const formProps: FormInstanceProps = {
    values: [
      {
        name: "stockName",
        placeholder: "stock symbol",
        type: TYPE.string,
        value: name,
        updateValue: setName,
      },
      {
        name: "stockMode",
        placeholder: "number of days to train for",
        type: TYPE.number,
        value: mode,
        updateValue: setMode,
      },
    ],
    size: 1.5,
  };

  return (
    <div style={{ ...style, ...objectCSS.box }}>
      <FormInstance {...formProps} style={objectCSS.form} />
      <div style={objectCSS.buttonBox}>
        <Button onClick={closeWindow} size={1.5} style={objectCSS.button}>
          Back
        </Button>
        <div style={{ width: "0.5rem" }} />
        <Button onClick={addStock} size={1.5} style={objectCSS.button}>
          Submit
        </Button>
      </div>
    </div>
  );
};
