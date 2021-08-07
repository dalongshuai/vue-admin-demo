const path = require('path');
const fs = require('fs');

// 是否是线上环境
const PRO_MODE = process.env.NODE_ENV === 'production';

// 计算打包版本
const setPackageJsonVersion = () => {
    const pkgPath = path.join(__dirname, './package.json');
    let pkg = fs.readFileSync(pkgPath);
    pkg = JSON.parse(pkg);
    const arr = pkg.version.split('.');
    const str = Number(arr[2]) + 1;
    if(str === 10) {
        arr[2] = '0';
        if(arr[1] === 9) {
            arr[1] = '0';
            arr[0] = Number(arr[0]) + 1;
        } else {
            arr[1] = Number(arr[1]) + 1;
        }
    } else {
        arr[2] = String(str);
    }
    pkg.version = arr.join('.');
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
};

module.exports = {
    publicPath: PRO_MODE ? '' : '/', // 服务器路径
    outputDir: process.env.outPutDir, // 打包文件名
    productionSourceMap: false, // 打包时是否添加 .map文件
    // assetsDir: 'assets', // 静态资源输出目录

    /* css预处理 */
    css: {
        loaderOptions: {
            sass: {
                // additionalData: "@import '~@/styles/mixins', '~@/styles/variables'"
                additionalData: "@import '~@/assets/styles/variables';"
            },
            scss: {
                additionalData: "@import '~@/assets/styles/variables';"
            }
        }
    },
    /* webpack配置 */
    chainWebpack: (config) => {
        config.plugin('html').tap(options => {
            options[0].title = 'vue-demo'; // 网页初始化标题配置
            return options;
        });
        config.plugin('define').tap(options => {
            // 打包版本信息配置
            if(process.env.NODE_ENV === 'production') setPackageJsonVersion();
            return options;
        });
    },
    /* 跨域代理 */
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.124.7:3000', // 服务器域名
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
