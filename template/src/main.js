// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import ajax from './store/ajax'

Vue.use(VueRouter)

const routes = [{
    // TODO  该路由仅用于示例，与项目无关，请自行删除
    path: '/',
    component: require('./components/demo')
  }]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body);

// 请求发送拦截器
ajax.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 隐藏 Loading
ajax.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

// 判断是否支持0.5px
let body = document.querySelector('body')
if (window.devicePixelRatio && devicePixelRatio >= 2) {
    let testElem = document.createElement('div')

    testElem.style.border = '.5px solid transparent';
    body.appendChild(testElem);
    if (testElem.offsetHeight >= 1){
        body.classList.add('half-border');
    } else {
        body.classList.add('full-border');
    }
    document.body.removeChild(testElem);
} else {
    body.classList.add('full-border');
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
