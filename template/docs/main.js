// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import installComponents from './installComponents'

var highlight = require('highlight.js/lib')
highlight.initHighlightingOnLoad()

Vue.component('demo-block', demoBlock)
Vue.use(installComponents)

Vue.config.productionTip = false

Vue.prototype.$toast = function(text, time) {
    Toast(text, time)
};
Vue.prototype.$hideToast = function() {
    hideToast()
};

// 判断是否支持0.5px
let body = document.querySelector('body')
if (window.devicePixelRatio && devicePixelRatio >= 2) {
    let testElem = document.createElement('div')

    testElem.style.border = '.5px solid transparent';
    body.appendChild(testElem);
    if (testElem.offsetHeight >= 1) {
        body.classList.add('half-border');
    } else {
        body.classList.add('full-border');
    }
    document.body.removeChild(testElem);
} else {
    body.classList.add('full-border');
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
