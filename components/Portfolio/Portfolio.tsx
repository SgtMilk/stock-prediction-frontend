// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import React, { FC, ReactElement, useState } from "react";
import { ConnectedStockView } from "../StockView/ConnectedStockView";
import {
  Button,
  Spacer,
  SelectInput,
  SelectInputProps,
} from "sgtmilk-global-components";
import { objectCSS } from "./stylesheet";
import { useSelector } from "react-redux";
import { RootState, Status } from "data";

export interface PortfolioProps {
  stockIds: Array<string>;
  openAddStock: () => void;
  style?: React.CSSProperties;
}

/**
 * The Portfolio component displays and formats a list of StockView components
 * @param stockIds (an array of stock ids to fetch the stocks in the state afterwards)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const Portfolio: FC<PortfolioProps> = ({
  stockIds,
  openAddStock,
  style,
}): ReactElement => {
  const [mode, setMode] = useState<string>("4");
  const modeProps: SelectInputProps = {
    name: "mode",
    choices: ["4", "9", "16"],
    value: mode,
    updateValue: setMode,
  };
  const state = useSelector((state: RootState) => state);
  return (
    <div style={style}>
      {Status.selectors.getSelectedPortfolio(state) === "" ? null : (
        <div style={objectCSS.buttons}>
          <SelectInput {...modeProps} />
          <Spacer />
          <Button onClick={openAddStock}>Add Stock</Button>
        </div>
      )}

      <div style={objectCSS.box}>
        {stockIds.map((id, i) => (
          <div key={i}>
            <ConnectedStockView stockId={id} mode={parseInt(mode)} />
          </div>
        ))}
      </div>
    </div>
  );
};
