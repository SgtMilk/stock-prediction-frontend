import React, { FC, ReactElement, useState } from "react";
import { ConnectedStockView } from "../StockView/ConnectedStockView";
import { Input } from "../../globalComponents";
import { objectCSS } from "./stylesheet";

export interface PortfolioProps {
  stockIds: Array<number>;
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
  style,
}): ReactElement => {
  const [mode, setMode] = useState<string>("4");
  const modeProps: Input.Select.SelectInputProps = {
    name: "mode",
    choices: ["4", "9", "16"],
    value: mode,
    updateValue: setMode,
  };
  return (
    <div style={style}>
      <div style={objectCSS.buttons}>
        <Input.Select.SelectInput
          {...modeProps}
          style={{ width: "auto", height: "3vh" }}
        />
      </div>
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
