# vue版本2.6.11
### server目录: node express接口框架
使用方法：
- npm install -g express
- npm install -g express-generator
- 初始化：npm i (如果慢请运行：npm config set registry https://registry.npm.taobao.org)
- 启动：npm run dev
### vue-demo: 项目目录
使用方法
- 初始化：yarn or npm i
- .env.development文件里的VUE_APP_DEV_URL换成自己本地域名
- vue.config.js文件里的跨域代理域名换成自己本地域名

### 用户名：admin 密码：123456

### 添加eslint 保存时自动修复规则
- vue add @vue/eslint(选择标准模式Standard && 选择保存时校验Lint on save)
- 简单配置在下面
- 如果保存自动修复不生效 请单独添加vue-demo目录到vscode工作区

# 环境配置
- 测试环境 => .env.test
- 开发环境 => .env.production
- 本地开发环境默认为 => .env.development
## 参数说明
1. NODE_ENV 环境名称变量
2. VUE_APP_URL 环境域名变量
3. outPutDir 打包输出文件夹
- 项目内调用变量方法 process.env[变量]
## 打包参数
1. --mode        指定环境模式 (默认值：production)
2. --dest        指定输出目录 (默认值：dist)
3. --modern      面向现代浏览器带自动回退地构建应用
4. --target      app | lib | wc | wc-async (默认值：app)
5. --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
6. --no-clean    在构建项目之前不清除目标目录
7. --report      生成 report.html 以帮助分析包内容
8. --report-json 生成 report.json 以帮助分析包内容
9. --watch       监听文件变化
## 打包目录配置
- vue-cli-service build --mode production --no-clean --dest=目录（windows下目录路径不要加引号 会出现异常文件夹）

# 项目配置
## constants目录
- 项目常量配置

## /assets/css/styles目录
1. _variables.css: css全局常量配置
2. common.css: css全局样式配置

## vue.config.js
1. 版本自增配置
2. 本地跨域配置

## .postcssrc.js(postcss-px-to-viewport)PC适配
```
module.exports = {
    plugins: {
        autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
        "postcss-px-to-viewport": {
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 1920, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            landscape: false // 是否处理横屏情况
        }
    }
};
```

## eslint配置
1. vue add @vue/eslint(选择标准模式Standard && 选择保存时校验Lint on save)
2. vscode 保存时简单修复eslint setting文件中配置
3. .eslintignore文件：忽略文件（同git忽略文件）
4. vscode setting文件配置 + 保存时简单修复eslint规则
```
"editor.detectIndentation": false, // 取消两个空格
"eslint.options": {
    "extensions": [".js", ".vue"]
},
"eslint.run": "onSave",
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```
5. .eslintrc.js简单配置
```
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "semi": [2, "always"], //强制语句分号结尾
        "camelcase": 0,  // 不强制使用驼峰命名
        "indent": ["error", 4], // tab四个空格
        "keyword-spacing": ["error", { "overrides": {
            "if": { "after": false }, // if后面不加空格
        }}]
    }
}
```