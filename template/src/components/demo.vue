<!-- TODO  该文件仅用于示例，与项目无关，请自行删除 -->
<template>
<div class="demo">
    <input class="input-add" type="text" v-model="newTodo" placeholder="输入后回车" @keyup.enter="addTodoItem({title:newTodo,order:1,completed:false})">
    <div class="todo-list">
        <div class="todo-box bd-top" :class="{'completed': item.completed}" v-for="item in todoList">
            <i class="todo-icon icon-complete" @click="updateTodo({url:item.url,completed:!item.completed})">✔</i>
            <p class="todo-title">{{item.title}}</p>
            <i class="todo-icon icon-delete" @click="removeTodo(item.url)">✘</i>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    name: 'demo',
    data() {
        return {
            newTodo: ''
        }
    },
    computed: {
        ...mapState({
            todoList: state => state.demo.todoList
        })
    },
    mounted() {
        this.getTodoList();
    },
    methods: {
        ...mapActions([
            'getTodoList',
            'addTodo',
            'updateTodo',
            'removeTodo'
        ]),
        addTodoItem(data) {
            var self = this;
            self.addTodo(data).then(() => {
                self.newTodo = '';
            })
        }
    }
}
</script>

<style lang="less">
.demo {
    * {
        outline: none;
        box-sizing: border-box;
    }
    .input-add {
        display: block;
        padding: 4px 10px;
        height: 50px;
        width: 100%;
        border: 0;
        font-size: 18px;
        &::-webkit-input-placeholder {
            font-size: 16px;
        }
    }
    .todo-box {
        position: relative;
        @height: 45px;
        padding: 0 30px;
        width: 100%;
        height: @height;
        line-height: @height;
        border-color: #ccc;
        border-top-style: dotted;
        background-color: white;
        .todo-icon {
            position: absolute;
            top: 0;
        }
        .icon-complete {
            left: 10px;
            color: #888;
        }
        .icon-delete {
            right: 10px;
            color: #f74c31;
        }
        &:first-child {
            border-color: #888;
        }
        &.completed {
            .todo-title {
                color: #888;
                text-decoration: line-through;
            }
            .icon-complete {
                left: 10px;
                color: #04be02;
            }
        }
    }
}
</style>
