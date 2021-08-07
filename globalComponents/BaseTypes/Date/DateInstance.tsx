import React, { FC, ReactElement } from "react";

export interface DateInstanceProps {
  value: Date;
  size?: number;
  style?: React.CSSProperties;
}

export const DateInstance: FC<DateInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <div style={{ ...style, fontSize: `${size}rem` }}>
      {value.toDateString()}
    </div>
  );
};
