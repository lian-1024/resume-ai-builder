// vite.config.ts
import { defineConfig } from "file:///Users/lian/Developer/my-projects/resume-ai-builder/node_modules/.pnpm/vite@5.4.14_@types+node@22.13.9/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import dts from "file:///Users/lian/Developer/my-projects/resume-ai-builder/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@22.13.9_typescript@5.7.3_vite@5.4.14/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "/Users/lian/Developer/my-projects/resume-ai-builder/packages/resume-utils";
var __vite_injected_original_import_meta_url = "file:///Users/lian/Developer/my-projects/resume-ai-builder/packages/resume-utils/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      outDir: ["types"],
      tsconfigPath: "./tsconfig.json",
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace("/src/", "/"),
        content
      })
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    outDir: "dist",
    // 指定输出目录
    emptyOutDir: true,
    // 清空输出目录
    minify: true,
    // 压缩输出文件
    sourcemap: true,
    // 生成 sourcemap 生产环境设置为 false
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      // 入口文件
      name: "resume-utils",
      fileName: "resume-utils"
    },
    rollupOptions: {
      external: [
        "dayjs"
      ],
      output: [
        {
          format: "esm",
          // ES Module 格式
          dir: "es",
          // 输出目录
          entryFileNames: "[name].js",
          // 入口文件名
          exports: "named",
          // 导出格式
          // 保留原始模块结构，而不是将所有模块合并成一个大文件
          preserveModules: true,
          // 将 src 目录设置为模块的根目录，这样输出的文件就会直接从 src 的子目录开始，去掉 src 这一层。
          preserveModulesRoot: "src"
        },
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src"
        }
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
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGlhbi9EZXZlbG9wZXIvbXktcHJvamVjdHMvcmVzdW1lLWFpLWJ1aWxkZXIvcGFja2FnZXMvcmVzdW1lLXV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbGlhbi9EZXZlbG9wZXIvbXktcHJvamVjdHMvcmVzdW1lLWFpLWJ1aWxkZXIvcGFja2FnZXMvcmVzdW1lLXV0aWxzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9saWFuL0RldmVsb3Blci9teS1wcm9qZWN0cy9yZXN1bWUtYWktYnVpbGRlci9wYWNrYWdlcy9yZXN1bWUtdXRpbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7XG4gICAgICBvdXREaXI6IFsndHlwZXMnXSxcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLmpzb25cIixcbiAgICAgIGJlZm9yZVdyaXRlRmlsZTogKGZpbGVQYXRoLCBjb250ZW50KSA9PiAoe1xuICAgICAgICBmaWxlUGF0aDogZmlsZVBhdGgucmVwbGFjZShcIi9zcmMvXCIsICcvJyksXG4gICAgICAgIGNvbnRlbnRcbiAgICAgIH0pXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JywgLy8gXHU2MzA3XHU1QjlBXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XG4gICAgZW1wdHlPdXREaXI6IHRydWUsIC8vIFx1NkUwNVx1N0E3QVx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVxuICAgIG1pbmlmeTogdHJ1ZSwgLy8gXHU1MzhCXHU3RjI5XHU4RjkzXHU1MUZBXHU2NTg3XHU0RUY2XG4gICAgc291cmNlbWFwOiB0cnVlLCAvLyBcdTc1MUZcdTYyMTAgc291cmNlbWFwIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZVxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksICAvLyBcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcbiAgICAgIG5hbWU6ICdyZXN1bWUtdXRpbHMnLFxuICAgICAgZmlsZU5hbWU6ICdyZXN1bWUtdXRpbHMnLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgJ2RheWpzJ1xuICAgICAgXSxcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7XG4gICAgICAgICAgZm9ybWF0OiAnZXNtJywgLy8gRVMgTW9kdWxlIFx1NjgzQ1x1NUYwRlxuICAgICAgICAgIGRpcjogJ2VzJywgLy8gXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLCAvLyBcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLCAvLyBcdTVCRkNcdTUxRkFcdTY4M0NcdTVGMEZcbiAgICAgICAgICAvLyBcdTRGRERcdTc1NTlcdTUzOUZcdTU5Q0JcdTZBMjFcdTU3NTdcdTdFRDNcdTY3ODRcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMDZcdTYyNDBcdTY3MDlcdTZBMjFcdTU3NTdcdTU0MDhcdTVFNzZcdTYyMTBcdTRFMDBcdTRFMkFcdTU5MjdcdTY1ODdcdTRFRjZcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgLy8gXHU1QzA2IHNyYyBcdTc2RUVcdTVGNTVcdThCQkVcdTdGNkVcdTRFM0FcdTZBMjFcdTU3NTdcdTc2ODRcdTY4MzlcdTc2RUVcdTVGNTVcdUZGMENcdThGRDlcdTY4MzdcdThGOTNcdTUxRkFcdTc2ODRcdTY1ODdcdTRFRjZcdTVDMzFcdTRGMUFcdTc2RjRcdTYzQTVcdTRFQ0Ugc3JjIFx1NzY4NFx1NUI1MFx1NzZFRVx1NUY1NVx1NUYwMFx1NTlDQlx1RkYwQ1x1NTNCQlx1NjM4OSBzcmMgXHU4RkQ5XHU0RTAwXHU1QzQyXHUzMDAyXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogJ3NyYydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogXCJjanNcIixcbiAgICAgICAgICBkaXI6IFwibGliXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICdzcmMnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBmb3JtYXQ6ICd1bWQnLCAvLyBcdTc2RjRcdTYzQTVcdTRGN0ZcdTc1MjhzY3JpcHRcdTY4MDdcdTdCN0VcdTVGMTVcdTUxNjVcbiAgICAgICAgLy8gICBkaXI6ICdkaXN0JyxcbiAgICAgICAgLy8gICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXG4gICAgICAgIC8vICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgLy8gICBuYW1lOiAndWknLCAvLyB1bWQgXHU1RkM1XHU5ODdCXHU2MzA3XHU1QjlBXG4gICAgICAgIC8vICAgZ2xvYmFsczoge1xuICAgICAgICAvLyAgICAgLy8gVU1EIFx1NjgzQ1x1NUYwRlx1NEUwQlx1NTkxNlx1OTBFOFx1NEY5RFx1OEQ1Nlx1NzY4NFx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlx1NTQwRFxuICAgICAgICAvLyAgICAgZGF5anM6ICdkYXlqcydcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG59KSAiXSwKICAibWFwcGluZ3MiOiAiO0FBQTZZLFNBQVMsb0JBQW9CO0FBQzFhLFNBQVMsZUFBZSxXQUFXO0FBQ25DLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFIeEIsSUFBTSxtQ0FBbUM7QUFBaU4sSUFBTSwyQ0FBMkM7QUFJM1MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUSxDQUFDLE9BQU87QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxpQkFBaUIsQ0FBQyxVQUFVLGFBQWE7QUFBQSxRQUN2QyxVQUFVLFNBQVMsUUFBUSxTQUFTLEdBQUc7QUFBQSxRQUN2QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixhQUFhO0FBQUE7QUFBQSxJQUNiLFFBQVE7QUFBQTtBQUFBLElBQ1IsV0FBVztBQUFBO0FBQUEsSUFDWCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFFBQVE7QUFBQTtBQUFBLFVBQ1IsS0FBSztBQUFBO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQTtBQUFBLFVBQ2hCLFNBQVM7QUFBQTtBQUFBO0FBQUEsVUFFVCxpQkFBaUI7QUFBQTtBQUFBLFVBRWpCLHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsS0FBSztBQUFBLFVBQ0wsZ0JBQWdCO0FBQUEsVUFDaEIsU0FBUztBQUFBLFVBQ1QsaUJBQWlCO0FBQUEsVUFDakIscUJBQXFCO0FBQUEsUUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFZRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
