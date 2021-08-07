import React, { useState } from "react";
import { SelectInput } from "./SelectInput";

export default {
  title: "Global Components/Base Input Types/SelectInput",
  component: SelectInput,
};

export const Default = () => {
  const [value, updateValue] = useState<string>("");
  return (
    <SelectInput
      name={"beep"}
      choices={["a", "b", "c"]}
      placeholder={" Choose: "}
      style={{ width: "auto" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
