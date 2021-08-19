import { CSSProperties } from "react";
import { colors, flex, animations } from "style";

const boxWidth = "20vw";

export const objectCSS: { [key: string]: CSSProperties } = {
  subBox: {
    width: "15vw",
    height: "1rem",
    margin: "1vh 0 1vh 0",
  },
};

export const functionCSS: {
  [key: string]: (...args: any) => CSSProperties;
} = {
  box: (animationState: boolean) => ({
    ...flex.flex,
    alignItems: "center",
    height: "100%",
    width: boxWidth,
    backgroundColor: colors.lightGrey,
    animation: animationState
      ? `slideIn ${animations.animationTime / 2}s`
      : `delayedSlideOut ${animations.animationTime}s`,
  }),
  animationBox: (animationState: boolean) => ({
    animation: animationState
      ? `delayedFadeIn ${animations.animationTime}s`
      : `delayedFadeOut ${animations.animationTime}s`,
  }),
};

const delayedFade = `
@keyframes delayedFadeIn{
  0%  {opacity: 0;}
  50%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes delayedSlideOut{
  0%   { width: ${boxWidth}; }
  50%   { width: ${boxWidth}; }
  100% { width: 0; }
}
@keyframes delayedFadeOut{
  0%   { opacity: 1; }
  50%   { opacity: 0; }
  100% { opacity: 0; }
}
`;

export const portfolioSelectorCSS = `
.portfolioSelection:hover {
    filter: brightness(1.5);
}
${animations.slideIn(boxWidth)}
${delayedFade}
`;
