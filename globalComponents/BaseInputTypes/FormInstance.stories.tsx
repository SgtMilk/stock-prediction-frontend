import React, { useState } from "react";
import { FormInstance, TYPE } from "./FormInstance";

export default {
  title: "Base Input Types/FormInstance",
  component: FormInstance,
};

export const Default = () => {
  const [value1, updateValue1] = useState<boolean>(false);
  const [value2, updateValue2] = useState<Date>(new Date(0));
  const [value3, updateValue3] = useState<string>("");
  const [value4, updateValue4] = useState<number>(3);
  const [value5, updateValue5] = useState<string>("");
  const [value6, updateValue6] = useState<string>("");
  const [value7, updateValue7] = useState<string>("");

  const mockdata = [
    {
      name: "name1",
      type: TYPE.boolean,
      value: value1,
      updateValue: updateValue1,
    },
    {
      name: "name2",
      type: TYPE.date,
      value: value2,
      updateValue: updateValue2,
    },
    {
      name: "name3",
      type: TYPE.email,
      value: value3,
      updateValue: updateValue3,
    },
    {
      name: "name4",
      type: TYPE.number,
      value: value4,
      updateValue: updateValue4,
    },
    {
      name: "name5",
      type: TYPE.password,
      value: value5,
      updateValue: updateValue5,
    },
    {
      name: "name6",
      type: TYPE.repeatedPassword,
      value: value6,
      updateValue: updateValue6,
    },
    {
      name: "name7",
      type: TYPE.string,
      value: value7,
      updateValue: updateValue7,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "none",
      }}
    >
      <FormInstance values={mockdata} style={{ width: "40vw" }} />
    </div>
  );
};
