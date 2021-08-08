import { CSSProperties } from "react";
import { colors } from "../../style";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {
  box: (expanded: boolean, mode: number) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: expanded ? "90vh" : `${90 / Math.sqrt(mode)}vh`,
    width: expanded ? "100vw" : `${100 / Math.sqrt(mode)}vw`,
    backgroundColor: colors.darkGrey,
    borderRadius: expanded ? "10vh" : `${10 / Math.sqrt(mode)}vh`,
    transition: "0.3s",
  }),
  title: (expanded: boolean, mode: number) => ({
    color: colors.white,
    fontWeight: 600,
    fontSize: expanded ? "3rem" : `${4 / Math.sqrt(mode)}rem`,
    transition: "0.3s",
  }),
  text: (expanded: boolean, mode: number) => ({
    color: colors.white,
    fontWeight: 500,
    fontSize: expanded ? "2rem" : `${3 / Math.sqrt(mode)}rem`,
    transition: "0.3s",
    paddingBottom: expanded ? "3rem" : `${4 / Math.sqrt(mode)}rem`,
  }),
  titleBox: (expanded: boolean) => ({
    height: "20%",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: expanded ? "space-between" : "center",
    transition: "0.3s",
  }),
};

export const objectCSS: { [key: string]: CSSProperties } = {
  graphBox: {
    height: "80%",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
  },
  button: {
    height: "2rem",
  },
};
