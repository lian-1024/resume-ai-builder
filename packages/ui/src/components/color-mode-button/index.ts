export { default as ColorModeButton } from './color-mode-button.vue'


export const COLOR_MODE = {
  Dark: 'dark',
  Light: 'light',
  System: 'system'
} as const

export type ColorModeType = (typeof COLOR_MODE)[keyof typeof COLOR_MODE]

