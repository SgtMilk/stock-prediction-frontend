import React, { FC, ReactElement, ReactNode } from "react";
import stylesheet from "./stylesheet";
import "./stylesheet.css";

export interface ButtonProps {
  onClick: () => void;
  size?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  size = 1,
  children,
  style = {},
}): ReactElement => {
  return (
    <div
      onClick={onClick}
      style={{ ...stylesheet.button(size), ...style }}
      className="button"
    >
      {children}
    </div>
  );
};
