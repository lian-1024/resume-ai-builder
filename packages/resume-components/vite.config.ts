import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 生成 TypeS,ript 声明文件的插件
    dts({
      tsconfigPath: 'tsconfig.build.json',
      outDir: "types",
      // 在写入文件之前，将 src 目录替换为根目录
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/src/', '/'),
        content
      }),
    })
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: true,// 压缩输出文件
    sourcemap: true,// 生成 sourcemap 生产环境设置为 false
    lib: {
      // 指定多入口文件
      entry: {
        builder: path.resolve(__dirname, 'src/builder/index.ts'),
        preview: path.resolve(__dirname, 'src/preview/index.ts'),
      },
      name: 'resume-components',
    },
    rollupOptions: {
      external: [
        'vue',// 将 Vue 设置为外部依赖
        '@iconify/vue',
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
          preserveModulesRoot: 'src',
          globals: {
            vue: "Vue",
            "@iconify/vue": "IconifyVue",
          }
        },
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: {
            vue: "Vue",
            "@iconify/vue": "IconifyVue",
          }
        },

      ]
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }

})
