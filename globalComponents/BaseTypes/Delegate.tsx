import React, { FC, ReactElement } from "react";

import { ArrayInstance } from "./Array/ArrayInstance";
import { BooleanInstance } from "./Boolean/BooleanInstance";
import { DateInstance } from "./Date/DateInstance";
import { NumberInstance } from "./Number/NumberInstance";
import { ObjectInstance } from "./Object/ObjectInstance";
import { StringInstance } from "./String/StringInstance";

export interface DelegateProps {
  value: any;
  size?: number;
  style?: React.CSSProperties;
}

export const Delegate: FC<DelegateProps> = (props): ReactElement => {
  const type = typeof props.value;
  switch (type) {
    case "boolean":
      return <BooleanInstance {...props} />;
    case "number":
      return <NumberInstance {...props} />;
    case "string":
      return <StringInstance {...props} />;
    case "object":
      if (props.value instanceof Date) return <DateInstance {...props} />;
      else if (props.value instanceof Array)
        return <ArrayInstance {...props} />;
      else if (props.value instanceof Object)
        return <ObjectInstance {...props} />;
      else return <p style={{ color: "red" }}>Invalid type</p>;
    default:
      return <p style={{ color: "red" }}>Invalid type</p>;
  }
};
