
import VueRouter from 'vue-router'
import Vue from 'vue';
import store from '../store';

Vue.use(VueRouter);

const Error404 = () => import("../components/Error404.vue");
import Home from "./home";
import Admin from "./adminpanel";

export const routes = [
    { path: "/404", component: Error404 },
    { path: "*", redirect: "/404" },
    ...Home,
    ...Admin,
];

//Register Routes
const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes
});
//Thay đổi tiêu đề (title tag)
router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'UTT SelfLearning'
    next()
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isAuthenticated']) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiredRole)) {
        if (store.getters['auth/isAuthenticated']) {
            if (store.getters['auth/getCurrentUser'].role === to.meta.requiredRole) {
                next();
                return;
            }
        }
        alert("Bạn không có quyền truy cập vào trang này!");
        history.back();
    } else {
        next();
    }
});

export default router;
