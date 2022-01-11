import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/home/index.vue';
import Login from './pages/login/index.vue';
import Register from './pages/register/index.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;

