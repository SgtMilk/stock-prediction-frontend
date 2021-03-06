// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import { StorybookDecorator } from "data";
import React from "react";
import { PortfolioSelector } from "./PortfolioSelector";

export default {
  title: "Page Components/PortfolioSelector",
  component: PortfolioSelector,
  decorators: [StorybookDecorator],
};

export const Default = () => {
  return <PortfolioSelector closeMenu={() => {}} animationState={true} />;
};
