import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      // 指定 tsconfig 文件
      tsconfigPath: 'tsconfig.json',
      outDir: 'types',
      // 在写入文件之前，将 src 目录替换为根目录
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/src/', '/'),
        content
      })
    })
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'resume-schema',
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
