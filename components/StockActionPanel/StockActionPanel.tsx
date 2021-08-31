// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import React, { FC, ReactElement, useState } from "react";
import {
  Button,
  Spacer,
  FormInstance,
  FormInstanceProps,
  TYPE,
} from "sgtmilk-global-components";
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
 * @param animationState (the state of the animation, boolean)
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
  const [mode, setMode] = useState<string>("");

  // All the redux stuff
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

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
        choices: ["daily", "weekly", "monthly"],
        placeholder: "mode",
        type: TYPE.select,
        value: mode,
        updateValue: setMode,
      },
    ],
    size: 1.5,
  };

  return (
    <div style={{ ...functionCSS.box(animationState), ...style }}>
      <FormInstance {...formProps} style={objectCSS.form} />
      <div style={objectCSS.buttonBox}>
        <Button onClick={closeWindow} size={1.5} style={objectCSS.button}>
          Back
        </Button>
        <Spacer />
        <Button
          onClick={async () => {
            let tempMode: number = 0;
            switch (mode) {
              case "daily":
                tempMode = 1;
                break;
              case "weekly":
                tempMode = 5;
                break;
              case "monthly":
                tempMode = 22;
                break;
            }
            if (await addStock(name, tempMode, state, dispatch)) closeWindow();
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
