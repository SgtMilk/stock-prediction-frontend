import { CSSProperties } from "react";
import { colors, flex, animations } from "style";

// Constants
const formColor = colors.grey;

export const objectCSS: { [key: string]: CSSProperties } = {
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

export const functionCSS: { [key: string]: (...args: any) => CSSProperties } = {
  box: (animationState: boolean) => ({
    ...flex.centerFlex,
    width: "50vw",
    height: "50vh",
    backgroundColor: colors.lightGrey,
    borderRadius: "5vh",
    animation: animationState
      ? `fadeIn ${animations.animationTime}s`
      : `fadeOut ${animations.animationTime}s`,
  }),
};
