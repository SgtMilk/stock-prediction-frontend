import { CSSProperties } from "react";
import { colors } from "../../style";

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
    minHeight: "80vh",
    width: "100vw",
  },
};
