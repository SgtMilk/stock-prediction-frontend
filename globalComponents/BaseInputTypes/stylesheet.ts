import React from "react";
import { colors, fonts, flex } from "../../style";

const text: React.CSSProperties = {
  color: colors.white,
  fontFamily: fonts.main,
  fontWeight: 600,
};

const formContainer: React.CSSProperties = {
  width: "20rem",
  ...flex.centerFlex,
};

const option: React.CSSProperties = {
  backgroundColor: colors.lightGrey,
  ...text,
};

const inputContainer = (size: number): React.CSSProperties => {
  return {
    marginTop: `${size}rem`,
    marginBottom: `${size}rem`,
    ...flex.centerFlex,
  };
};

const inputBox = (size: number): React.CSSProperties => {
  return {
    backgroundColor: colors.lightGrey,
    paddingTop: `${size * 0.75}rem`,
    paddingBottom: `${size * 0.75}rem`,
    borderRadius: `${size * 0.5}rem`,
    fontSize: `${size}rem`,
    paddingRight: `${size * 1.5}rem`,
    paddingLeft: `${size * 1.5}rem`,
    ...text,
    ...flex.centerInlineFlex,
  };
};

const icon = (size: number, color: string): React.CSSProperties => {
  return {
    height: `${size / 2}rem`,
    width: `${size / 2}rem`,
    borderRadius: `${size / 4}rem`,
    border: `${size / 4}rem solid ${color}`,
  };
};

const visibilityIcon = (size: number): React.CSSProperties => {
  return { width: `${size}rem`, height: "auto" };
};

const checkbox = (size: number): React.CSSProperties => {
  return {
    height: `${size}rem`,
    width: `${size}rem`,
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
  element.style.backgroundColor = colors.darkGrey;
};

export default {
  flex: flex.flex,
  inlineFlex: flex.centerInlineFlex,
  text,
  formContainer,
  option,
  inputBox,
  icon,
  focus,
  inputContainer,
  checkbox,
  spacer,
  visibilityIcon,
};
