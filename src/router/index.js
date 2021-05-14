import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Rutinas from '../views/Rutinas.vue'
import Profile from "../views/Profile";
import Explore from "../views/Explore";
import RoutineCreator from "../views/RoutineCreator";
import ValidarEmail from "../views/ValidarEmail";
import ViewRoutine from "../views/ViewRoutine";
import EditAccount from "../views/EditAccount";
import Favoritos from "../views/Favoritos";
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
    path: '/Favoritos',
    name: 'Favoritos',
    component: Favoritos,
  },
  {
    path: '/RoutineCreator',
    name: 'RoutineCreator',
    component: RoutineCreator
  },
  {
    path: '/validarEmail',
    name: 'ValidarEmail',
    component: ValidarEmail
  },
  {
    path: '/EditAccount',
    name: 'EditAccount',
    component: EditAccount
  },
  {
    path: '/ViewRoutine',
    name:'ViewRoutine',
    component: ViewRoutine
  }
]

const router = new VueRouter({
  routes
})

export default router
