import React from "react";
import { Delegate } from "./Delegate";

export default {
  title: "Base Display Types/Delegate",
  component: Delegate,
};

export const ArrayDelegate = () => {
  return <Delegate style={{ width: "40vw" }} size={1} value={["String", 3]} />;
};

export const BooleanDelegate = () => {
  return <Delegate style={{ width: "40vw" }} size={1} value={true} />;
};

export const DateDelegate = () => {
  return (
    <Delegate
      style={{ width: "40vw" }}
      size={1}
      value={new Date("11-11-2000")}
    />
  );
};

export const NumberDelegate = () => {
  return <Delegate style={{ width: "40vw" }} size={1} value={3} />;
};

export const ObjectDelegate = () => {
  return (
    <Delegate
      style={{ width: "40vw" }}
      size={1}
      value={{ value1: "value1", value2: 3 }}
    />
  );
};

export const StringDelegate = () => {
  return <Delegate style={{ width: "40vw" }} size={1} value={"String"} />;
};
