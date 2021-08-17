import { CSSProperties } from "react";
import { colors, flex } from "style";

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    ...flex.flex,
    alignItems: "center",
    height: "100%",
    width: "20vw",
    backgroundColor: colors.lightGrey,
  },
  subBox: {
    width: "15vw",
    height: "1rem",
    margin: "1vh 0 1vh 0",
  },
};

export const portfolioSelectionHover = `
.portfolioSelection:hover {
    filter: brightness(1.5);
}
`;
