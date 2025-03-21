import './assets/main.css'
import '@lianqq/resume-ui/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import setupStore from './stores'


const bootstrap = () => {
    const app = createApp(App)
    setupStore(app)
    app.use(router)
    app.mount('#app')
}

bootstrap()
