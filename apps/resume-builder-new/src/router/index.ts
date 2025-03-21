import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/builder',
      name: 'builder',
      component: () => import('@/views/builder/index.vue')
    }
  ],
})

export default router
