import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 指定 tsconfig 文件
      tsconfigPath: 'tsconfig.build.json',
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
      external: ['vue'],
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
        },
        {
          format: 'umd', // 直接使用script标签引入
          dir: 'dist',
          entryFileNames: '[name].js',
          exports: 'named',
          name: 'ui', // umd 必须指定
          globals: {
            // UMD 格式下外部依赖的全局变量名
            vue: 'Vue',
          }
        }
      ]
    }
  }
})
