// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";
import { colors, flex } from "style";

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    ...flex.spacedInlineFlex,
    width: "100vw",
    height: "10vh",
    backgroundColor: colors.accentBlue,
  },
  title: {
    color: colors.white,
    fontWeight: 650,
    fontSize: "2.25rem",
  },
};
