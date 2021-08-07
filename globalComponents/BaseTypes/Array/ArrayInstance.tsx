import React, { FC, ReactElement } from "react";
import { Delegate, DelegateProps } from "../Delegate";

export interface ArrayInstanceProps {
  value: Array<any>;
  size?: number;
  style?: React.CSSProperties;
}

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
        const objectCheck = Array.isArray(v) || v instanceof Object;
        return objectCheck ? (
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
