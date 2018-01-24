export default [{
    path: '/component',
    component: resolve => require(['../mds/components/index.md'], resolve)
}, {
    path: '/component/toast',
    component: resolve => require(['../mds/components/toast.md'], resolve)
}]
