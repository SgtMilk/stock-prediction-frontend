import React, { useState } from "react";
import { StringInput } from "./StringInput";

export default {
  title: "Global Components/Base Input Types/StringInput",
  component: StringInput,
};

export const Default = () => {
  const [value, updateValue] = useState("");
  return (
    <StringInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
