import React, { useState } from "react";
import { DateInput } from "./DateInput";

export default {
  title: "Global Components/Base Input Types/DateInput",
  component: DateInput,
};

export const Default = () => {
  const [value, updateValue] = useState(new Date(0));
  return (
    <DateInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
