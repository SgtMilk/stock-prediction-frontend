import React, { FC, ReactElement } from "react";
import { Delegate, DelegateProps } from "../Delegate";
import { functionCSS } from "../stylesheet";

export interface ObjectInstanceProps {
  value: { [key: string]: any };
  size?: number;
  style?: React.CSSProperties;
}

/**
 * This component will display a json-type object
 *
 * @param value (json-type object)
 * @param size (the size if the component, will default to 1, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const ObjectInstance: FC<ObjectInstanceProps> = ({
  value,
  size = 1,
  style = {},
}): ReactElement => {
  return (
    <ul style={{ ...functionCSS.text(size), ...style }}>
      {Object.entries(value).map(([k, v], index) => {
        const delegateProps: DelegateProps = {
          value: v,
          size,
          style,
        };
        return (
          <li key={index}>
            {`${k}: `}
            <Delegate {...delegateProps} />
          </li>
        );
      })}
    </ul>
  );
};
