import { CSSProperties } from "react";
import { colors, fonts } from "../../../style";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {};

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    width: "15vw",
    height: "1rem",
    margin: "1vh 0 1vh 0",
    backgroundColor: colors.lightGrey,
    paddingTop: `0.75rem`,
    paddingBottom: `0.75rem`,
    borderRadius: `0.5rem`,
    fontSize: `1rem`,
    paddingRight: `1.5rem`,
    paddingLeft: `1.5rem`,
    color: colors.white,
    fontFamily: fonts.main,
    fontWeight: 600,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
  },
};
