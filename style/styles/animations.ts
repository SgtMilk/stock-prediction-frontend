export const fadeIn = `@keyframes fadeIn{
    0%   { opacity: 0; }
    100% { opacity: 1; }
}`;

export const fadeOut = `@keyframes fadeOut{
    0%   { opacity: 1; }
    100% { opacity: 0; }
}`;

export const slideIn = (width: string) => `@keyframes slideIn{
    0%   { width: 0; }
    100% { width: ${width}; }
}`;

export const slideOut = (width: string) => `@keyframes slideOut{
    0%   { width: ${width}; }
    100% { width: 0; }
}`;

export const animationTime = 0.3;
