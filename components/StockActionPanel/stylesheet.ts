import { CSSProperties } from "react";
import { colors } from "../../style";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {};

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50vw",
    height: "50vh",
    backgroundColor: colors.lightGrey,
    borderRadius: "5vh",
  },
  buttonBox: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: "1.5rem",
    backgroundColor: colors.grey,
  },
  form: {
    backgroundColor: colors.grey,
  },
};
