import v_config from '../../package.json';

let cut_url = ''; // 默认为本地环境

if(process.env.NODE_ENV === 'production') {
    cut_url = process.env.VUE_APP_PRO_URL;
} else if(process.env.NODE_ENV === 'test') {
    cut_url = process.env.VUE_APP_TEST_URL;
} else {
    cut_url = process.env.VUE_APP_DEV_URL;
}

export const API_DEFAULT_CONFIG = {
    baseUrl: cut_url,
    version: v_config.version
};

console.log(API_DEFAULT_CONFIG);
