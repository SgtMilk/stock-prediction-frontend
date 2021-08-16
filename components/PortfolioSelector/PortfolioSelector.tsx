import React, { FC, ReactElement, useState } from "react";
import { Button, Input } from "../../globalComponents";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Portfolios } from "../../data";
import { objectCSS, portfolioSelectionHover } from "./stylesheet";
import { addPortfolio } from "../../backendCalls";
import { PortfolioBlock } from "./PortfolioBlock/PortfolioBlock";

export interface PortfolioSelectorProps {
  closeMenu: () => void;
  style?: React.CSSProperties;
}

/**
 * Side panel for portfolio selection and creation
 * @param closeMenu (function to close meny)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
export const PortfolioSelector: FC<PortfolioSelectorProps> = ({
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
    <div style={{ ...objectCSS.box, ...style }}>
      <style>{portfolioSelectionHover}</style>
      {portfolios.map((portfolio, i) => (
        <div key={i}>
          <PortfolioBlock {...{ portfolio, closeMenu }} />
        </div>
      ))}
      <Input.String.StringInput
        name="portfolio_name"
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
  );
};
