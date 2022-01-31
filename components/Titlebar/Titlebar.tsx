// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import React, { FC, ReactElement } from "react";
import { objectCSS } from "./stylesheet";
import { Button, StringInstance } from "sgtmilk-global-components";

export interface TitlebarProps {
  menuFunction: () => void;
  refreshFunction: () => void;
  style?: React.CSSProperties;
}

/**
 * The project's titlebar
 * @param menuCallback (callback to open the menu)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const Titlebar: FC<TitlebarProps> = ({
  menuFunction,
  refreshFunction,
  style,
}): ReactElement => {
  return (
    <div style={{ ...objectCSS.box, ...style }}>
      <Button onClick={menuFunction}>Menu</Button>
      <StringInstance
        value={"The Stock Prediction Project"}
        style={objectCSS.title}
      />
      <Button onClick={refreshFunction}>Refresh</Button>
    </div>
  );
};
