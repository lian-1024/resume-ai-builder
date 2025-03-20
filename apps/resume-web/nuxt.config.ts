// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 配置 SSR
  ssr: true,
  // 开发服务器配置
  devServer: {
    port: 3002,
    host: 'localhost'
  },

  // 配置模块
  modules: [// UI
    // 状态管理
    '@nuxtjs/tailwindcss', 'shadcn-nuxt', // 动画
    '@pinia/nuxt', // 工具
    'pinia-plugin-persistedstate/nuxt', 'motion-v/nuxt', // 主题
    '@nuxt/eslint', // 字体
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-security'],
  security: {
    corsHandler: {
      // 允许跨域
      origin: "http://localhost:5173",
    }
  },

  // Google Fonts 配置
  googleFonts: {
    families: {
      Inter: {
        wght: '100..900'
      }
    },
    display: 'swap',
    preload: true,
    download: true,
    base64: false
  },


  // shadcn 组件库配置
  shadcn: {
    prefix: '', // 导入组件的前缀
    componentDir: './components/ui' // 组件目录
  },

  // nuxt icon 配置
  icon: {
    size: '24px',
    class: 'icon',
    serverBundle: {
      collections: ['lucide', 'radix-icons']
    }
  },

  // 颜色模式配置
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'resume-editor-color-mode'
  },

  css: [
    '~/assets/css/index.css',
    '~/assets/css/animate.css',
    "@lianqq/resume-ui/styles.css",
    '~/assets/css/tailwind.css', // 将tailwind.css放在最后，覆盖前面的样式
  ],

  // 应用配置
  app: {
    baseURL: '/',
    head: {
      title: 'Resume AI Editor'
    }
  },

  imports: {
    dirs: ['stores']
  },

  compatibilityDate: '2025-01-13'
})