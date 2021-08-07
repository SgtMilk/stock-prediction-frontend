import React, { useState } from "react";
import { EmailInput } from "./EmailInput";

export default {
  title: "Global Components/Base Input Types/EmailInput",
  component: EmailInput,
};

export const Default = () => {
  const [value, updateValue] = useState("");
  return (
    <EmailInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};
