import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  plugins: [],
}

export default config;
