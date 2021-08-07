import React, { FC, ReactElement } from "react";

export interface NumberInstanceProps {
  value: number;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a number
 *
 * @param value (number)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const NumberInstance: FC<NumberInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return <div style={{ ...style, fontSize: `${size}rem` }}>{value}</div>;
};
