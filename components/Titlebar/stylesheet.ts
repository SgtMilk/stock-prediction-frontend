import { CSSProperties } from "react";
import { colors } from "../../style";

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    height: "10vh",
    backgroundColor: colors.accentBlue,
    padding: "0 2.5vw 0 2.5vw",
  },
  title: {
    color: colors.white,
    fontWeight: 650,
    fontSize: "2.25rem",
  },
  button: {
    backgroundColor: colors.lightGrey,
    height: "2.5vh",
  },
};
