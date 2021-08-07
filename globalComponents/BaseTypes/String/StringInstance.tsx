import React, { FC, ReactElement } from "react";

export interface StringInstanceProps {
  value: string;
  size?: number;
  style?: React.CSSProperties;
}

export const StringInstance: FC<StringInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return <div style={{ ...style, fontSize: `${size}rem` }}>{value}</div>;
};
