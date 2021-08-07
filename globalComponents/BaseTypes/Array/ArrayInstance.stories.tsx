import React from "react";
import { ArrayInstance } from "./ArrayInstance";

export default {
  title: "Base Display Types/Array Instance",
  component: ArrayInstance,
};

export const Default = () => {
  return <ArrayInstance style={{ width: "40vw" }} size={1} value={[]} />;
};
