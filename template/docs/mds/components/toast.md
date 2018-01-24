# Toast
Toast是一个弹层提示，多用于提示错误，只显示对应的错误文本。

## 基础用法
在`main.js`中引入，并在`Vue.prototype`上绑定即可。

main.js

```javascript
import {Toast,hideToast} from '$component/toast/showTip.js';



Vue.prototype.$toast = function(text, time) {
    Toast(text, time)
};
Vue.prototype.$hideToast = function() {
    hideToast()
};

```
component.vue

::: demo
```javascript
export default {
    data() {
        return {
            content: ''
        };
    },
    methods: {
        showToast() {
            this.$toast('提示框弹出');
        },
        hiddenToast() {
            this.$hideToast();
        }
    }
}
```

```html
<button type="button" name="button" @click="showToast">弹出提示</button>
<br>
<button type="button" name="button" @click="hiddenToast">隐藏提示</button>
```
:::

-----------------------

<div class="demo-block">
    <button type="button" name="button" @click="showToast">弹出提示</button>
    <br>
    <button type="button" name="button" @click="hiddenToast">隐藏提示</button>
</div>


## 参数说明

参数       | 说明             | 类型      | 可选值                                 | 默认值
-------- | -------------- | ------- | ----------------------------------- | -----
text    | 显示文本         | String | --                                  | --
time     | 显示时长             | Number  | ---                | 3000


<script>
export default {
    data() {
        return {
            content: ''
        };
    },
    methods: {
        showToast() {
            this.$toast('提示框弹出');
        },
        hiddenToast() {
            this.$hideToast();
        }
    }
}
</script>
