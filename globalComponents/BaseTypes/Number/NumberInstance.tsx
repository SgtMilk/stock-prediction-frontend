import React, { FC, ReactElement } from "react";

export interface NumberInstanceProps {
  value: number;
  size?: number;
  style?: React.CSSProperties;
}

export const NumberInstance: FC<NumberInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return <div style={{ ...style, fontSize: `${size}rem` }}>{value}</div>;
};
