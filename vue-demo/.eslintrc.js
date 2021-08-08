module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "semi": [2, "always"], //强制语句分号结尾
    "camelcase": 0,  // 不强制使用驼峰命名
    "indent": ["error", 4], // tab四个空格
    "keyword-spacing": ["error", { "overrides": {
        "if": { "after": false }, // if后面不加空格
    }}]
  }
}
