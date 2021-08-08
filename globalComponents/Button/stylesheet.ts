import React from "react";
import { colors, fonts } from "../../style";

const button = (size: number): React.CSSProperties => ({
  width: "auto",
  backgroundColor: colors.accentBlue,
  paddingTop: `${size * 0.75}rem`,
  paddingBottom: `${size * 0.75}rem`,
  borderRadius: `${size * 0.5}rem`,
  fontSize: `${size}rem`,
  paddingRight: `${size * 1.5}rem`,
  paddingLeft: `${size * 1.5}rem`,
  userSelect: "none",
  transition: "0.3s",
  ...text,
  ...inlineFlex,
});

const inlineFlex: React.CSSProperties = {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
};

const text: React.CSSProperties = {
  color: colors.white,
  fontFamily: fonts.main,
  fontWeight: 650,
};

export default {
  button,
};
