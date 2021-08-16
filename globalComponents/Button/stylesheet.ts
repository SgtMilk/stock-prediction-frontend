import React from "react";
import { colors, fonts, flex } from "../../style";

const button = (size: number): React.CSSProperties => ({
  // font stuff
  fontSize: `${size}rem`,
  color: colors.white,
  fontFamily: fonts.main,
  fontWeight: 650,
  userSelect: "none",
  // box stuff
  ...flex.centerInlineFlex,
  width: "auto",
  height: "auto",
  backgroundColor: colors.accentBlue,
  paddingTop: `${size * 0.75}rem`,
  paddingBottom: `${size * 0.75}rem`,
  borderRadius: `${size * 0.5}rem`,
  paddingRight: `${size * 1.5}rem`,
  paddingLeft: `${size * 1.5}rem`,
  transition: "0.3s",
});

export default {
  button,
};
