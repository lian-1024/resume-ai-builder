import type { Config } from 'tailwindcss';
import baseConfig from './base';

const config: Omit<Config, 'content'> = {
  presets: [baseConfig],
  content: [
    './src/**/*.{ts,tsx,vue}',
  ],
}

export default config;
