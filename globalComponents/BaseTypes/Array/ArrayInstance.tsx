import React, { FC, ReactElement } from "react";
import stylesheet from "../stylesheet";

export interface ArrayInstanceProps {
  value: Array<any>;
  style?: object;
}

const ArrayInstance: FC<ArrayInstanceProps> = ({
  value,
  style = {},
}): ReactElement => {
  return <div style={stylesheet.box}></div>; // example of css style, change it if you want.
};

export default ArrayInstance;
