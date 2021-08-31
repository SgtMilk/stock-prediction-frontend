// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import React from "react";
import { Titlebar } from "./Titlebar";

export default {
  title: "Page Components/Titlebar",
  component: Titlebar,
};

export const Default = () => {
  return (
    <Titlebar
      menuFunction={() => {
        console.log("menu function");
      }}
      refreshFunction={() => {
        console.log("refresh function");
      }}
      style={{ width: "70vw" }}
    />
  );
};
