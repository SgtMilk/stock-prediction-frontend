import React, { FC, ReactElement } from "react";
import { functionCSS } from "../stylesheet";

export interface BooleanInstanceProps {
  value: boolean;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a boolean
 *
 * @param value (boolean)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const BooleanInstance: FC<BooleanInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <div style={{ ...functionCSS.text(size), ...style }}>{`${value}`}</div>
  );
};
