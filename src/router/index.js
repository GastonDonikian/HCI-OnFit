import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Rutinas from '../views/Rutinas.vue'
import Profile from "../views/Profile";
import Logros from "../views/Logros";
import Explore from "../views/Explore";
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
    path: '/Explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/Rutinas',
    name: 'Rutinas',
    component: Rutinas
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Logros',
    name: 'Logros',
    component: Logros
  }
]

const router = new VueRouter({
  routes
})

export default router
