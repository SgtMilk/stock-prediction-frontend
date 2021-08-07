import React, { FC, ReactElement } from "react";
import { Delegate, DelegateProps } from "../Delegate";
import { objectCSS } from "../stylesheet";

export interface ObjectInstanceProps {
  value: { [key: string]: any };
  size?: number;
  style?: React.CSSProperties;
}

export const ObjectInstance: FC<ObjectInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <ul style={{ ...style, fontSize: `${size}rem` }}>
      {Object.entries(value).map(([k, v], index) => {
        const delegateProps: DelegateProps = {
          value: v,
          size,
          style,
        };
        const objectCheck = Array.isArray(v) || v instanceof Object;
        return objectCheck ? (
          <div key={index} style={objectCSS.inlineFlex}>
            <p>{k}</p>
            <div style={objectCSS.padding} />
            <Delegate {...delegateProps} />
          </div>
        ) : (
          <li key={index} style={objectCSS.inlineFlex}>
            <p>{k}</p>
            <div style={objectCSS.padding} />
            <Delegate {...delegateProps} />
          </li>
        );
      })}
    </ul>
  );
};
