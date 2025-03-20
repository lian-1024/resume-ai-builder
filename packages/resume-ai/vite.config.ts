import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "tsconfig.json",
      outDir:'types',
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/src/', '/'),
        content
      })
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'resume-ai',
    },
    rollupOptions: {
      output: [
        {
          format: 'esm', // ES Module 格式
          dir: 'es', // 输出目录
          entryFileNames: '[name].js', // 入口文件名
          exports: 'named', // 导出格式
          // 保留原始模块结构，而不是将所有模块合并成一个大文件
          preserveModules: true,
          // 将 src 目录设置为模块的根目录，这样输出的文件就会直接从 src 的子目录开始，去掉 src 这一层。
          preserveModulesRoot: 'src'
        },
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    }
  }
})
