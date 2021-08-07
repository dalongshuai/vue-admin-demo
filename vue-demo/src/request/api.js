import { post } from './http';

/*
get/post第三个参数(可选)：取消请求的唯一key(必须与请求名称一致) 加上此参数时，请求可以手动取消并且重复请求时会默认取消上一个请求
请求调用方法：this.$http[key]({axios请求参数}) 例：this.$http.login({data: {...}, headers: {...}})
请求取消方法：this.$cancelApi[key]()  例：this.$cancelApi.login()
*/

// 接口测试
const login = p => post('/login', p, 'login');

export default {
    login
};
