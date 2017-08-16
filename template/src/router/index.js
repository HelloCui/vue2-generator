const demo = resolve => require(['../components/demo'], resolve);

let routes = [{
    // TODO  该路由仅用于示例，与项目无关，请自行删除
    path: '/',
    component: demo,
}];
routes = routes.concat([{
    path: '*',
    redirect: '/'
}]);
export default routes
