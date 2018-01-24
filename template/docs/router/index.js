import Vue from 'vue'
import Router from 'vue-router'
import components from './components'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: resolve => require(['../mds/index.md'], resolve)
    }, {
        path: '/docInstructions',
        component: resolve => require(['../mds/docInstructions.md'], resolve)
    }].concat(components, [{
        path: '/readme',
        component: resolve => require(['../../README.md'], resolve)
    }, {
        path: '*',
        redirect: '/'
    }])
})
