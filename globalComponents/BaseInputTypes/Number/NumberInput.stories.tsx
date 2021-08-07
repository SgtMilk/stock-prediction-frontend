import React, { useState } from "react";
import { NumberInput } from "./NumberInput";

export default {
  title: "Global Components/Base Input Types/NumberInput",
  component: NumberInput,
};

export const Default = () => {
  const [value, updateValue] = useState(0);
  return (
    <NumberInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
