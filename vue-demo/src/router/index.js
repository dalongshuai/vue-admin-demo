import Vue from 'vue';
import VueRouter from 'vue-router';
import routeMap from './routeMap.js';
import store from '@/store';

Vue.use(VueRouter);

/*
设置了语言方案时  属性name必加
*/
const routes = [
    ...routeMap
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
    if(token && toRoute.path === '/login') {
        next({
            path: '/404'
        });
    };
    if(!token && toRoute.path !== '/login') {
        next({
            path: '/login'
        });
    }
    next();
};

router.beforeEach(beforeEach);

export default router;
