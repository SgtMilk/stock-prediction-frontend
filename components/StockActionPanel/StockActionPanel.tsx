import React, { FC, ReactElement, useState } from "react";
import { Button, Spacer, Input } from "sgtmilk-global-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "data";
import { addStock } from "backendCalls";
import { objectCSS, functionCSS } from "./stylesheet";

export interface StockActionPanelProps {
  animationState: boolean;
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
  animationState,
  closeWindow,
  style = {},
}): ReactElement => {
  // All the local state stuff
  const [name, setName] = useState<string>("");
  const [mode, setMode] = useState<number>(1);

  // All the redux stuff
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  // props to create the form instance
  const formProps: Input.FormInstanceProps = {
    values: [
      {
        name: "stockName",
        placeholder: "stock symbol",
        type: Input.TYPE.string,
        value: name,
        updateValue: setName,
      },
      {
        name: "stockMode",
        placeholder: "number of days to train for",
        type: Input.TYPE.number,
        value: mode,
        updateValue: setMode,
      },
    ],
    size: 1.5,
  };

  return (
    <div style={{ ...functionCSS.box(animationState), ...style }}>
      <Input.FormInstance {...formProps} style={objectCSS.form} />
      <div style={objectCSS.buttonBox}>
        <Button onClick={closeWindow} size={1.5} style={objectCSS.button}>
          Back
        </Button>
        <Spacer />
        <Button
          onClick={async () => {
            if (await addStock(name, mode, state, dispatch)) closeWindow();
          }}
          size={1.5}
          style={objectCSS.button}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
