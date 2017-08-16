import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo' //TODO 该行代码用于示例，与项目无关，请自行删除
Vue.use(Vuex);

// 这里将store分割成模块以使它不显得过分臃肿，但有一点需要注意的是，除了 state，模块内部的
// action、mutation 和 getter 现在仍然注册在全局命名空间————这样保证了多个模块能够响应
// 同一 mutation 或 action。你可以通过添加前缀或后缀的方式隔离各模块，以避免名称冲突。
export default new Vuex.Store({
    modules: {
        demo //TODO 该行代码用于示例，与项目无关，请自行删除
    }
});
