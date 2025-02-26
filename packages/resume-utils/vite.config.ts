import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
export default defineConfig({
  plugins: [
    dts({
      outDir: ['types'],
      tsconfigPath: "./tsconfig.json",
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace("/src/", '/'),
        content
      })
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // 指定输出目录
    emptyOutDir: true, // 清空输出目录
    minify: true, // 压缩输出文件
    sourcemap: true, // 生成 sourcemap 生产环境设置为 false
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),  // 入口文件
      name: 'resume-utils',
      fileName: 'resume-utils',
    },
    rollupOptions: {
      external: [
        'dayjs'
      ],
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
        // {
        //   format: 'umd', // 直接使用script标签引入
        //   dir: 'dist',
        //   entryFileNames: '[name].js',
        //   exports: 'named',
        //   name: 'ui', // umd 必须指定
        //   globals: {
        //     // UMD 格式下外部依赖的全局变量名
        //     dayjs: 'dayjs'
        //   }
        // }
      ]
    }
  },
}) 