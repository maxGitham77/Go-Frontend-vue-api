import { createRouter, createWebHistory } from "vue-router";
import Body from '../components/Body'
import Login from '../components/Login'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Body,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
]

const router = createRouter({history: createWebHistory(), routes});

export default router;