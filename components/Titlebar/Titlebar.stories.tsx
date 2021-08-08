import React from "react";
import { Titlebar } from "./Titlebar";

export default {
  title: "Page Components/Titlebar",
  component: Titlebar,
};

export const Default = () => {
  return (
    <Titlebar
      menuCallback={() => {
        console.log("menu function");
      }}
      style={{ width: "70vw" }}
    />
  );
};
