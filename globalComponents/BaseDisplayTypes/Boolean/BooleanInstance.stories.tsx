import React from "react";
import { BooleanInstance } from "./BooleanInstance";

export default {
  title: "Global Components/Base Display Types/Boolean Instance",
  component: BooleanInstance,
};

export const Default = () => {
  return <BooleanInstance style={{ width: "40vw" }} size={1} value={true} />;
};
