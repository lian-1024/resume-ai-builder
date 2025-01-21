import sharedConfig from '@lianqq/resume-config/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedConfig],
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // 包含 src 目录下所有的 Vue、JS、TS 等文件
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

