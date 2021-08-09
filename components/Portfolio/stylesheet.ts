import { CSSProperties } from "react";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {};

export const objectCSS: { [key: string]: CSSProperties } = {
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "10vh",
    width: "100vw",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100vw",
  },
};
