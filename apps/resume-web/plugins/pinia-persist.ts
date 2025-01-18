import { type Pinia } from 'pinia'
import persisted from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(nuxtApp => {
  // 只在客户端使用pinia-plugin-persistedstate插件
  if (process.client) {
    const pinia = nuxtApp.$pinia as Pinia
    pinia.use(persisted)
  }
})
