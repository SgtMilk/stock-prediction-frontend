import React from "react";
import { NumberInstance } from "./NumberInstance";

export default {
  title: "Base Display Types/Number Instance",
  component: NumberInstance,
};

export const Default = () => {
  return <NumberInstance style={{ width: "40vw" }} size={1} value={5} />;
};
