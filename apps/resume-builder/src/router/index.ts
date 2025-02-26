import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/builder',
      component: () => import('@/layouts/default.vue'),
      children:[
        {
          path:"/builder",
          component:()=>import('@/views/builder/index.vue'),
         
        },
        {
          path:"/preview",
          component:()=>import('@/views/preview/index.vue')
        }
      ]
    }
  ],
})

export default router
