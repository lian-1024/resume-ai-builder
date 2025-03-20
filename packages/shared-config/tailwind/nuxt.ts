import type { Config } from 'tailwindcss';
import baseConfig from './base';
const config: Omit<Config, 'content'> = {
  presets: [baseConfig],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './layouts/**/*.{ts,tsx,vue}',
    './app.vue',
  ],
}

export default config;
