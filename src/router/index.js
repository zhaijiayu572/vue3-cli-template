import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { HOME_PAGE_NAME, LOGIN_PAGE_NAME } from './constants'
import routerInterceptor from './routerInterceptor'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: HOME_PAGE_NAME,
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: LOGIN_PAGE_NAME,
      component: () => import('../views/login.vue')
    }
  ]
})

export default routerInterceptor(router)
