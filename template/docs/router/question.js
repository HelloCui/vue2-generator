export default [{
    path: '/questions',
    component: resolve => require(['../mds/questions/index.md'], resolve)
}, {
    path: '/questions/componentStyleSetting',
    component: resolve => require(['../mds/questions/componentStyleSetting.md'], resolve)
}]
