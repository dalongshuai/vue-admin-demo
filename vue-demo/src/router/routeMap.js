const routeMap = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test'),
        meta: {
            title: '测试页'
        }
    }
];

export default routeMap;
