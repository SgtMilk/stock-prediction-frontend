// Copyright (c) 2021 Alix Routhier-Lalonde. Licence included in root of package.

import { CSSProperties } from "react";
import { colors, flex } from "style";

// Constants
const textColor = colors.white;
const transitionTime = "0.3s";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {
  box: (expanded: boolean, mode: number) => {
    const sqrt = Math.sqrt(mode);
    const margin = (5 - sqrt) / 2;
    return {
      ...flex.centerFlex,
      height: expanded ? `${80 - 2 * margin}vh` : `${90 / sqrt - 2 * margin}vh`,
      width: expanded
        ? `${100 - 2 * margin}vw`
        : `${100 / sqrt - 2 * margin}vw`,
      borderRadius: expanded ? "10vh" : `${10 / sqrt}vh`,
      margin: `${margin}vh ${margin}vw ${margin}vh ${margin}vw`,
      backgroundColor: colors.darkGrey,
      transition: transitionTime,
    };
  },
  titleBox: (expanded: boolean) => ({
    ...flex.centerInlineFlex,
    height: "20%",
    width: "90%",
    justifyContent: expanded ? "space-between" : "center",
    transition: transitionTime,
  }),
  title: (expanded: boolean, mode: number) => ({
    color: textColor,
    fontWeight: 600,
    fontSize: expanded ? "3rem" : `${4 / Math.sqrt(mode)}rem`,
    transition: transitionTime,
  }),
  text: (expanded: boolean, mode: number) => ({
    color: textColor,
    fontWeight: 500,
    fontSize: expanded ? "2rem" : `${3 / Math.sqrt(mode)}rem`,
    transition: transitionTime,
    paddingBottom: expanded ? "3rem" : `${4 / Math.sqrt(mode)}rem`,
  }),
};

export const objectCSS: { [key: string]: CSSProperties } = {
  graphBox: {
    ...flex.centerFlex,
    height: "80%",
    width: "90%",
    transition: "0.3s",
  },
  button: {
    height: "2rem",
  },
};
