import { createPinia,type Pinia } from 'pinia'
import type { App } from 'vue'

let pinia:Pinia | null = null

export const setupStore = (app:App) => {
    pinia = createPinia()
    app.use(pinia)
    return app
}


export * from './modules/resume'