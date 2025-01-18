export { default as ColorModeButton } from './color-mode-button.vue';
export declare const COLOR_MODE: {
    readonly Dark: "dark";
    readonly Light: "light";
    readonly System: "system";
};
export type ColorModeType = (typeof COLOR_MODE)[keyof typeof COLOR_MODE];
