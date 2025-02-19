
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 将tailwind.css 放在ui之前，否者ui的样式会覆盖tailwind.css的样式
import '@/assets/styles/tailwind.css'
import '@lianqq/resume-ui/styles.css'

import App from './App.vue'
import router from './router'
import { setupStore } from './stores'

const bootstrap = async () => {     
  const app = createApp(App)

  setupStore(app)
  app.use(router)

  app.mount('#app')
}

await bootstrap()
