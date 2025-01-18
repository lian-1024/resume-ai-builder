
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
  modules: [
    // UI
    '@nuxtjs/tailwindcss', // 状态管理
    'shadcn-nuxt',
    '@pinia/nuxt', // 动画
    'pinia-plugin-persistedstate/nuxt', // 工具
    'motion-v/nuxt',
    '@nuxt/eslint', // 主题
    '@nuxt/icon', // 字体
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  alias: {

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
    '~/assets/css/tailwind.css',
    '~/assets/css/index.css',
    '~/assets/css/animate.css',
    "@resume/ui/styles.css"
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
