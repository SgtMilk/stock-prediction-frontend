import React from "react";
import { colors, fonts } from "../../style";

const flex: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const inlineFlex: React.CSSProperties = {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
};

const text: React.CSSProperties = {
  color: colors.default.white,
  fontFamily: fonts.default.default,
};

const formContainer: React.CSSProperties = {
  width: "20rem",
  ...flex,
};

const inputContainer = (size: number): React.CSSProperties => {
  return {
    marginTop: `${size}rem`,
    marginBottom: `${size}rem`,
    width: "100%",
    ...flex,
  };
};

const inputBox = (size: number): React.CSSProperties => {
  return {
    width: "100%",
    backgroundColor: colors.default.grey,
    paddingTop: `${size}rem`,
    paddingBottom: `${size}rem`,
    borderRadius: `${size}rem`,
    fontSize: `${size * 2}rem`,
    paddingRight: `${size * 1.5}rem`,
    paddingLeft: `${size * 1.5}rem`,
    ...text,
    ...inlineFlex,
  };
};

const icon = (size: number, color: string): React.CSSProperties => {
  return {
    height: `${size}rem`,
    width: `${size}rem`,
    borderRadius: `${size / 2}rem`,
    border: `${size / 2}rem solid ${color}`,
  };
};

const visibilityIcon = (size: number): React.CSSProperties => {
  return { width: `${size * 2}rem`, height: "auto" };
};

const checkbox = (size: number): React.CSSProperties => {
  return {
    height: `${2 * size}rem`,
    width: `${2 * size}rem`,
    marginRight: `${size}rem`,
  };
};

const spacer = (size: number): React.CSSProperties => {
  return {
    paddingRight: `${size / 2}rem`,
    paddingLeft: `${size / 2}rem`,
  };
};

const focus = (element: HTMLElement) => {
  element.style.backgroundColor = colors.default.darkGrey;
};

export default {
  flex,
  inlineFlex,
  text,
  formContainer,
  inputBox,
  icon,
  focus,
  inputContainer,
  checkbox,
  spacer,
  visibilityIcon,
};
