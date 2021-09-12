import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/category',
    component: () => import('../views/Category.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
