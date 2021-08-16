import React, { FC, ReactElement } from "react";
import { functionCSS } from "./stylesheet";

interface SpacerProps {
  size?: number;
}

export const Spacer: FC<SpacerProps> = ({ size = 1 }): ReactElement => {
  return <div style={functionCSS.box(size)} />;
};
