import React from "react";
import { StringInstance } from "./StringInstance";

export default {
  title: "Base Display Types/String Instance",
  component: StringInstance,
};

export const Default = () => {
  return <StringInstance style={{ width: "40vw" }} size={1} value={"String"} />;
};
