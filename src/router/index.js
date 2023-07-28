import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@components/HomePage.vue') },
    { path: '/login', component: () => import('@components/auth/SignUpLogin.vue') }
  ]
})

export default router
