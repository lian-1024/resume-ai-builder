import { createPinia,type Pinia } from 'pinia'
import type { App } from 'vue'

let pinia:Pinia | null = null

 const setupStore = (app:App) => {
    pinia = createPinia()
    app.use(pinia)
    return app
}

export default setupStore

export * from './modules/resume'