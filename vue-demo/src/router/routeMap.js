import BaseLayout from '@/components/BaseLayout';
import Empty from '@/views/404.vue';

/*
设置了语言方案时  属性name必加
*/
const routeMap = [
    /* 全屏路由 */
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
            title: '登录'
        }
    },
    /* 带头部和菜单的路由 */
    {
        path: '/',
        name: '/',
        component: BaseLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/Home'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('@/views/test'),
                meta: {
                    title: '测试页'
                }
            },
            {
                path: '*',
                meta: {
                    title: '404'
                },
                component: Empty
            }
        ]
    }
];

export default routeMap;
