// TODO  该文件仅用于示例，与项目无关，请自行删除

import {
    api
} from '../api';
import ajax from '../ajax';

var demoUrl = 'https://todo-backend-express.herokuapp.com/'
const state = {
    todoList: []
};

const getters = {};

const actions = {
    // 获取列表数据
    getTodoList({
        commit
    }, param) {
        return ajax.get('', {
            baseURL: demoUrl
        }).then((rep) => {
            commit('setTodoList', rep);
        }).catch(rep => {
            console.log('服务器请求失败~');
        })
    },
    addTodo({
        dispatch
    }, data) {
        return ajax.post('', data, {
            baseURL: demoUrl
        }).then((rep) => {
            dispatch('getTodoList');
        }).catch(rep => {
            console.log('服务器请求失败~');
        })
    },
    updateTodo({
        dispatch
    }, {
        url,
        completed
    }) {
        return ajax.patch('', {
            completed: completed
        }, {
            baseURL: url
        }).then((rep) => {
            dispatch('getTodoList');
        }).catch(rep => {
            console.log('服务器请求失败~');
        })
    },
    removeTodo({
        dispatch
    }, url) {
        return ajax.delete('', {
            baseURL: url
        }).then((rep) => {
            dispatch('getTodoList');
        }).catch(rep => {
            console.log('服务器请求失败~');
        })
    }
};

const mutations = {
    setTodoList: (state, res) => {
        state.todoList = res;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
