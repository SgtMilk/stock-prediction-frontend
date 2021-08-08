import React, { FC, ReactElement, ReactNode } from "react";
import stylesheet from "./stylesheet";
import "./stylesheet.css";

export interface ButtonProps {
  onClick: () => void;
  size?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
}

/**
 * Custom Button
 * @param onClick (callback function for clicking the button)
 * @param size (number, size of the component, optional)
 * @param children (child jsx components, optional)
 * @param style (React.CSSProperties, optional)
 * @constructor
 */
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
