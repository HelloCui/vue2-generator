# {{name}}

> {{description}}

## Build Setup

``` bash
{{#if_eq platform 'cordova'}}
h5-res-platform 依赖包需要切换私服安装
{{/if_eq}}

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

{{#if_eq doc true}}
# documents serve with hot reload at localhost:9000
npm run doc
{{/if_eq}}
```

## 坑
1. 如果你使用vux，请用npm安装依赖包。若用cnpm安装，在使用vux的部分组件时，会发生_vm.$t is not a function的错误
2. 不要在同一个模块里面混用ES6(import和export)和CommonJS(require和module.exports)，
webpack(2.2.0+)下会发生错误Cannot assign to read only property 'exports' of object '#<Object>'
