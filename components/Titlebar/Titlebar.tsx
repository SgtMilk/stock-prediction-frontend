import React, { FC, ReactElement } from "react";
import { objectCSS } from "./stylesheet";
import { Display, Button } from "../../globalComponents";

export interface TitlebarProps {
  style?: React.CSSProperties;
}

/**
 * The project's titlebar
 * @param menuCallback (callback to open the menu)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const Titlebar: FC<TitlebarProps> = ({ style }): ReactElement => {
  return (
    <div style={{ ...objectCSS.box, ...style }}>
      <Display.String.StringInstance
        value={"The Stock Prediction Project"}
        style={objectCSS.title}
      />
    </div>
  );
};
