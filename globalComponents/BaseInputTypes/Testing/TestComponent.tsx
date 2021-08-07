import React, { useState } from "react";
import { FormInstance, TYPE } from "../FormInstance";

export const TestComponent = () => {
  let [value, updateValue] = useState(null);
  return (
    <FormInstance
      values={[
        { name: "beep", type: TYPE.boolean, value, updateValue },
        { name: "beep", type: TYPE.date, value, updateValue },
        { name: "beep", type: TYPE.email, value, updateValue },
        { name: "beep", type: TYPE.number, value, updateValue },
        { name: "beep", type: TYPE.repeatedPassword, value, updateValue },
        { name: "beep", type: TYPE.password, value, updateValue },
        { name: "beep", type: TYPE.repeatedPassword, value, updateValue },
        { name: "beep", type: TYPE.string, value, updateValue },
      ]}
    />
  );
};
