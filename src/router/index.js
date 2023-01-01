import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue'
import Courses from '../views/Courses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/single',
      name: 'single',
      component: () => import('../views/Single.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue')
    },
  ]
})

export default router
