import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
