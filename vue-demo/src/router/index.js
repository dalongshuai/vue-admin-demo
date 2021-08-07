import Vue from 'vue';
import VueRouter from 'vue-router';
import routeMap from './routeMap.js';
import store from '@/store';
import Home from '@/views/Home';
import Empty from '@/views/404.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    ...routeMap,
    { path: '*', component: Empty }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

// 路由拦截
const beforeEach = async (toRoute, fromRoute, next) => {
    // 网页标题
    if(toRoute.meta.title) document.title = toRoute.meta.title;
    // 登录状态
    const token = store.state.token;
    if(token && toRoute.path === '/login') return false;
    if(!token && toRoute.path !== '/login') {
        next({
            path: '/login'
        });
    }
    next();
};

router.beforeEach(beforeEach);

export default router;
