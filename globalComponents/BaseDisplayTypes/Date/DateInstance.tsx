import React, { FC, ReactElement } from "react";

export interface DateInstanceProps {
  value: Date;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a date
 *
 * @param value (Date ts object)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
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
