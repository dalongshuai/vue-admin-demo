import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import { API_DEFAULT_CONFIG } from '@/constants';

// 基础配置
const service = axios.create({
    baseURL: API_DEFAULT_CONFIG.baseUrl, // 请求地址
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' // 参数默认以表单形式提交
    },
    timeout: 15000 // 请求超时
});

// 请求拦截器
// service.interceptors.request.use(
//     (config) => {
//         console.log(config)
//         return config;
//     },
//     (error) => {
//         // 错误抛到业务代码
//         error.data = {};
//         error.data.msg = "异常信息";
//         return Promise.resolve(error);
//     }
// );

// 响应拦截器
service.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    Message.error('error');
    // // 自定义接口报错信息
    // if(error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    // // 超时报错
    //     Message.error('请求超时');
    // } else if(error.code === 'ECONNABORTED' && error.message.indexOf('Network Error') !== -1) {
    //     Message.error('error');
    // }
    return Promise.resolve(error);
});

/*
get/post第三个参数(可选)：取消请求的唯一key(必须与请求名称一致) 加上此参数时，请求重复时会默认取消上一个请求
请求取消方法：this.$cancelApi[key]
请求调用方法：this.$http[key]({axios请求参数})
*/

Vue.prototype.$cancelApi = {}; // 取消请求集合
const CancelToken = axios.CancelToken;

function cancelToken (cancelName) {
    return new CancelToken(function executor (c) {
        if(cancelName) {
            const cancelFn = function (cn) {
                return (msg) => cn(msg);
            };
            Object.prototype.hasOwnProperty.call(Vue.prototype.$cancelApi, cancelName) && Vue.prototype.$cancelApi[cancelName]('取消重复请求');
            Vue.prototype.$cancelApi[cancelName] = cancelFn.call(this, c);
        }
    });
}

/* get */
export function get (url, opt, cancelName) {
    return service.get(url, {
        ...opt,
        params: opt.data,
        // 取消请求
        cancelToken: cancelToken(cancelName)
    });
}

/* post */
export function post (url, opt, cancelName) {
    opt.data = qs.stringify(opt.data);
    return service({
        method: 'POST',
        url: url,
        ...opt,
        // 取消请求
        cancelToken: cancelToken(cancelName)
    });
}
