export { default as ColorModeButton } from './color-mode-button.vue';
export { useColorMode } from '@vueuse/core';
export declare const COLOR_MODE: {
    readonly Dark: "dark";
    readonly Light: "light";
    readonly Auto: "auto";
};
export type ColorModeType = (typeof COLOR_MODE)[keyof typeof COLOR_MODE];
