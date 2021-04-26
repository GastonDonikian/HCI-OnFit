import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Tutorial from '../views/Tutorial.vue';
import Rutinas from '../views/Rutinas2.vue';
import Signin from '../views/Signin.vue';
import ConfirmEmail from "../views/ConfirmEmail";
import NewExercise from "@/views/NewExercise";
import Test from "@/views/Test";
import Explore from "@/views/Explore"
import ExploreFav from "@/views/ExploreFav"
import MisRutinas from "@/views/ExploreMisRutinas"
import MisEjercicios from "@/views/ExploreMisEjercicios"


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/createExercise',
        name: 'newexercise',
        component: NewExercise
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/tutorial',
        name: 'tutorial',
        component: Tutorial
    },
    {
        path: '/rutinas',
        name: 'rutinas',
        component: Rutinas
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore
    },{
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/verifyEmail',
        name: 'verifyEmail',
        component: ConfirmEmail
    },
    {
        path: '/explore',
        name: 'explorar',
        component: Explore
    },
    {
        path: '/explore/favoritos',
        name: 'favoritos',
        component: ExploreFav
    },
    {
        path: '/explore/mis-rutinas',
        name: 'misRutinas',
        component: MisRutinas
    },
    {
        path: '/explore/mis-ejercicios',
        name: 'misEjercicios',
        component: MisEjercicios
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
