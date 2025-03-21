import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPluginPersist from 'pinia-plugin-persistedstate'
const setupStore = (app: App) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersist)
    app.use(pinia)
}

export default setupStore


export * from './modules/resume'