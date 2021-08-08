import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import $http from '@/request/api.js';
import { session } from '@/utils';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import enLocale from 'element-ui/lib/locale/lang/en';

/* 全局css */
import '@/assets/styles/common.css';

/* 完整引入 */
if(store.state.local === 'en') {
    Vue.use(ElementUI, { locale: enLocale });
} else {
    Vue.use(ElementUI, { locale: zhLocale });
}

/* 按需引入element ui */
// import {
//     Button,
//     Tag,
//     Col,
//     Row
// } from 'element-ui';
// Vue.use(Button)
//     .use(Tag)
//     .use(Col)
//     .use(Row);

/* 全局挂载 */
Vue.prototype.$http = $http;
Vue.prototype.$session = session;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
