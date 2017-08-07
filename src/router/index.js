import Vue from 'vue'
import Router from 'vue-router'
let Home = resolve => import('@/views/home/home')
let Login = resolve => import('@/views/users/login')

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
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
