import React, { useState } from "react";
import { PasswordInput } from "./PasswordInput";

export default {
  title: "Global Components/Base Input Types/PasswordInput",
  component: PasswordInput,
};

export const Default = () => {
  const [value, updateValue] = useState("");
  return (
    <PasswordInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      value={value}
      updateValue={updateValue}
    />
  );
};

export const RepeatedTrue = () => {
  const [value, updateValue] = useState("");
  return (
    <PasswordInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      color={true}
      value={value}
      updateValue={updateValue}
    />
  );
};

export const RepeatedFalse = () => {
  const [value, updateValue] = useState("");
  return (
    <PasswordInput
      name={"beep"}
      style={{ width: "40vw" }}
      size={1}
      color={false}
      value={value}
      updateValue={updateValue}
    />
  );
};
