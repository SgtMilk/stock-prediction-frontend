import { CSSProperties } from "react";
import { flex } from "../../style";

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100vw",
  },
  buttons: {
    ...flex.centerInlineFlex,
    height: "10vh",
    width: "100vw",
  },
};
