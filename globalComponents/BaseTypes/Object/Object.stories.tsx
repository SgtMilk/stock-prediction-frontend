import React from "react";
import { ObjectInstance } from "./ObjectInstance";

export default {
  title: "Base Display Types/Object Instance",
  component: ObjectInstance,
};

export const Default = () => {
  return <ObjectInstance style={{ width: "40vw" }} size={1} value={[]} />;
};
