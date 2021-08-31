// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";
import { colors, fonts, flex } from "style";

const commonBoxAttributes: CSSProperties = {
  ...flex.inlineFlex,
  alignItems: "center",
  backgroundColor: colors.lightGrey,
  paddingTop: `0.75rem`,
  paddingBottom: `0.75rem`,
  borderRadius: `0.5rem`,
};

const commonActionAttributes: CSSProperties = {
  ...commonBoxAttributes,
  height: "1rem",
  paddingRight: `1.5rem`,
  paddingLeft: `1.5rem`,
  // font stuff
  color: colors.white,
  fontFamily: fonts.main,
  fontWeight: 600,
  fontSize: `1rem`,
};

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    width: "17.5vw",
    ...commonBoxAttributes,
  },
  portfolioSelect: {
    width: "95%",
    ...commonActionAttributes,
  },
  portfolioDelete: {
    width: "5%",
    ...commonActionAttributes,
  },
};
