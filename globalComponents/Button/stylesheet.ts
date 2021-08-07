import React from "react";
import { colors, fonts } from "../../style";

const button = (size: number): React.CSSProperties => ({
  width: "auto",
  backgroundColor: colors.default.accentBlue,
  paddingTop: `${size}rem`,
  paddingBottom: `${size}rem`,
  borderRadius: `${size}rem`,
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
  color: colors.default.white,
  fontFamily: fonts.default.default,
  fontWeight: 650,
};

export default {
  button,
};
