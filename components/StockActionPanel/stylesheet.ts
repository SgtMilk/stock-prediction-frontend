import { CSSProperties } from "react";
import { colors, flex } from "../../style";

// Constants
const formColor = colors.grey;

export const objectCSS: { [key: string]: CSSProperties } = {
  box: {
    ...flex.centerFlex,
    width: "50vw",
    height: "50vh",
    backgroundColor: colors.lightGrey,
    borderRadius: "5vh",
  },
  form: {
    backgroundColor: formColor,
  },
  buttonBox: {
    ...flex.centerInlineFlex,
  },
  button: {
    backgroundColor: formColor,
  },
};
