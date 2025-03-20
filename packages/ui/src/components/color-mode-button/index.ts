export { default as ColorModeButton } from './color-mode-button.vue'
export { useColorMode } from '@vueuse/core'

export const COLOR_MODE = {
  Dark: 'dark',
  Light: 'light',
  Auto: 'auto'
} as const

export type ColorModeType = (typeof COLOR_MODE)[keyof typeof COLOR_MODE]

