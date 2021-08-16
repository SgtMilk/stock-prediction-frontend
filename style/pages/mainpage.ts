import { CSSProperties } from "react";
import { colors } from "../../style";

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {};

export const objectCSS: { [key: string]: CSSProperties } = {
  portfolio: {
    backgroundColor: colors.grey,
  },
  panel: {
    height: "90vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 5,
  },
  menu: {
    height: "100%",
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
`;
