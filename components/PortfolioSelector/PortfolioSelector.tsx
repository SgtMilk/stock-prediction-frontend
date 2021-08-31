// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import React, { FC, ReactElement, useState } from "react";
import { Button, StringInput } from "sgtmilk-global-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Portfolios } from "data";
import { objectCSS, functionCSS, portfolioSelectorCSS } from "./stylesheet";
import { addPortfolio } from "backendCalls";
import { PortfolioBlock } from "./PortfolioBlock/PortfolioBlock";

export interface PortfolioSelectorProps {
  animationState: boolean;
  closeMenu: () => void;
  style?: React.CSSProperties;
}

/**
 * Side panel for portfolio selection and creation
 * @param animationState (the state of the animation, boolean)
 * @param closeMenu (function to close meny)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const PortfolioSelector: FC<PortfolioSelectorProps> = ({
  animationState,
  closeMenu,
  style = {},
}): ReactElement => {
  // All the local state stuff
  const [value, setValue] = useState<string>("");

  // All the redux stuff
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const portfolios: Portfolios.Portfolio[] = Portfolios.selectors.selectAll(
    state
  );

  return (
    <div style={{ ...functionCSS.box(animationState), ...style }}>
      <style>{portfolioSelectorCSS}</style>
      <div style={functionCSS.animationBox(animationState)}>
        {portfolios.map((portfolio, i) => (
          <div key={i}>
            <PortfolioBlock {...{ portfolio, closeMenu }} />
          </div>
        ))}
        <StringInput
          style={objectCSS.subBox}
          placeholder="portfolio name"
          value={value}
          updateValue={setValue}
        />
        <Button
          onClick={async () => {
            if (await addPortfolio(value, dispatch)) setValue("");
          }}
          style={objectCSS.subBox}
        >
          Add Portfolio
        </Button>
      </div>
    </div>
  );
};
