import React, { FC, ReactElement } from "react";

export interface BooleanInstanceProps {
  value: boolean;
  size?: number;
  style?: React.CSSProperties;
}

export const BooleanInstance: FC<BooleanInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return <div style={{ ...style, fontSize: `${size}rem` }}>{`${value}`}</div>;
};
