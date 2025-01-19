// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  devServer: {
    port: 3003,
  },

  app: {
    baseURL: "/resume",
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  css: ["~/assets/css/index.css", "@lianqq/resume-ui/styles.css"],
});
