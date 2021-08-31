// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";

export const flex: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export const centerFlex: CSSProperties = {
  ...flex,
  alignItems: "center",
  justifyContent: "center",
};

export const inlineFlex: CSSProperties = {
  display: "inline-flex",
  flexDirection: "row",
};

export const centerInlineFlex: CSSProperties = {
  ...inlineFlex,
  alignItems: "center",
  justifyContent: "center",
};

export const spacedInlineFlex: CSSProperties = {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
};
