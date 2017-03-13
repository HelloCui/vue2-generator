# 项目名称

> 项目介绍

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for test with minification
npm run buildTest

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 坑
1. 请用npm安装依赖包。
若用cnpm安装，在使用vux的部分组件时，会发生_vm.$t is not a function的错误
2. 不要在同一个模块里面混用不要混用 ES6(import和export)和 CommonJS(require和module.exports)，
webpack(2.2.0+)下会发生错误Cannot assign to read only property 'exports' of object '#<Object>'
