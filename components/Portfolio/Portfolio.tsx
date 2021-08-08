import React, { FC, ReactElement, useState } from "react";
import { ConnectedStockView } from "../StockView/ConnectedStockView";
import { Input } from "../../globalComponents";
import { objectCSS } from "./stylesheet";

export interface PortfolioProps {
  stockIds: Array<number>;
}

export const Portfolio: FC<PortfolioProps> = ({ stockIds }): ReactElement => {
  const [mode, setMode] = useState<string>("4");
  const modeProps: Input.Select.SelectInputProps = {
    name: "mode",
    choices: ["4", "9", "16"],
    value: mode,
    updateValue: setMode,
  };
  return (
    <div>
      <div style={objectCSS.buttons}>
        <Input.Select.SelectInput
          {...modeProps}
          style={{ width: "auto", height: "3vh" }}
        />
      </div>
      <div style={objectCSS.box}>
        {stockIds.map((id) => (
          <ConnectedStockView stockId={id} mode={parseInt(mode)} />
        ))}
      </div>
    </div>
  );
};
