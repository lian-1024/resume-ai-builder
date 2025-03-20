
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 将tailwind.css 放在ui之前，否者ui的样式会覆盖tailwind.css的样式
import '@/assets/styles/index.css'
import '@/assets/styles/tailwind.css'
import '@lianqq/resume-ui/styles.css'

import App from './App.vue'
import router from './router'
import setupStore from './stores'
import setupDirective from './directive'
const bootstrap = async () => {     
  const app = createApp(App)
  // 设置store
  setupStore(app)
  // 设置指令
  setupDirective(app)
  // 设置路由
  app.use(router)
  // 挂载
  app.mount('#app')
}

await bootstrap()
