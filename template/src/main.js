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
  // 显示 Loading
  store.commit('updateLoadingStatus', {isLoading: true});
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 隐藏 Loading
ajax.interceptors.response.use(function (response) {
  store.commit('updateLoadingStatus', {isLoading: false});
  return response;
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
