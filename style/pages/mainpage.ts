// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";
import { colors, flex, animations } from "../../style";

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: colors.grey,
  },
  portfolio: {
    backgroundColor: colors.grey,
  },
  panel: {
    ...flex.centerFlex,
    height: "90vh",
    width: "100vw",
    position: "fixed",
    zIndex: 5,
  },
  menu: {
    height: "100%",
    minHeight: "90vh",
    width: "100vw",
    position: "absolute",
    zIndex: 5,
  },
  mainpage: {
    height: "auto",
    width: "100vw",
    position: "absolute",
    top: "10vh",
  },
};

export const pageCSS = `
body {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
* {
  user-select: none;
}
::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}
${animations.fadeIn}
${animations.fadeOut}
`;
