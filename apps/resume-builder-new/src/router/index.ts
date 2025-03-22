import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/builder',
      children: [
        {
          path: 'builder',
          component: () => import('@/views/builder/index.vue')
        },
        {
          path: 'preview',
          component: () => import('@/views/preview/index.vue')
        }
      ]
    },
  ],
})

const setupRouter = (app: App) => {
  app.use(router)
}

export {
  router,
  setupRouter
}
