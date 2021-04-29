import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  }
]

const router = new VueRouter({
  routes
})

export default router
