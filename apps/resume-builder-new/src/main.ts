import './assets/main.css'
import './assets/resume.css'
import '@lianqq/resume-ui/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router, setupRouter } from './router'
import setupStore from './stores'


const bootstrap = () => {
    const app = createApp(App)
    setupStore(app)
    setupRouter(app)
    app.mount('#app')
}

bootstrap()
