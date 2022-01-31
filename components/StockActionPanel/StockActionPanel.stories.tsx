// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import { StorybookDecorator } from "data";
import React from "react";
import { StockActionPanel } from "./StockActionPanel";

export default {
  title: "Page Components/StockActionPanel",
  component: StockActionPanel,
  decorators: [StorybookDecorator],
};

export const Default = () => {
  return <StockActionPanel closeWindow={() => {}} animationState={true} />;
};
