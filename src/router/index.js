import Vue from 'vue'
import Router from 'vue-router'
let Home = resolve => import('@/views/home/home')
let User = resolve => import('@/views/users/index')
let Login = resolve => import('@/views/users/login')
let Sign = resolve => import('@/views/users/sign')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/Sign',
          name: 'sign',
          component: Sign
        }
      ]
    }
  ]
})
