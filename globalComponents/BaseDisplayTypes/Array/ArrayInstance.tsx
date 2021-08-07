import React, { FC, ReactElement } from "react";
import { Delegate, DelegateProps } from "../Delegate";

export interface ArrayInstanceProps {
  value: Array<any>;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display an array
 *
 * @param value (Array of any type)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const ArrayInstance: FC<ArrayInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <ul style={{ ...style, fontSize: `${size}rem` }}>
      {value.map((v, index) => {
        const delegateProps: DelegateProps = {
          value: v,
          size,
          style,
        };
        return Array.isArray(v) ? (
          <div key={index}>
            <Delegate {...delegateProps} />
          </div>
        ) : (
          <li key={index}>
            <Delegate {...delegateProps} />
          </li>
        );
      })}
    </ul>
  );
};
