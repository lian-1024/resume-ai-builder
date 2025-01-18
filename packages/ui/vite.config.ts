import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 生成 TypeScript 声明文件的插件
    dts({
      // include: ['src/**/*.{vue,ts,tsx}'], // 包含的文件类型
      outDir: ['types'],  // 输出目录
      tsconfigPath: "./tsconfig.build.json", // TypeScript 配置文件路径
      // 在写入文件之前，将 src 目录替换为根目录
      beforeWriteFile: (filePath, content) => ({
        // 替换 "/src/" 为 "/"
        filePath: filePath.replace("/src/", '/'),
        content
      })
    }),
  ],


  build: {
    outDir: 'dist', // 指定输出目录
    emptyOutDir: true, // 清空输出目录
    minify: true, // 压缩输出文件
    sourcemap: true, // 生成 sourcemap 生产环境设置为 false
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),  // 入口文件
      name: 'ui',
      fileName: 'ui',
      cssFileName: 'styles' // css 文件名
    },
    rollupOptions: {
      external: [
        // 外部依赖，不会被打包进库中
        'vue',
        'clsx',
        'class-variance-authority',
        'tailwind-merge',
        'radix-vue',
        "lucide-vue-next",
        "motion-v"
      ],
      output: [
        {
          format: 'es', // ES Module 格式
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
            clsx: 'clsx',
            'class-variance-authority': 'cva',
            'tailwind-merge': 'tailwindMerge',
            'tailwindcss-animate': 'tailwindcssAnimate',
            'radix-vue': 'radixVue',
            "@radix-icons/vue": "RadixIconsVue",
            "lucide-vue-next": "lucideVueNext",
          }
        }
      ]
    }
  },

  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
