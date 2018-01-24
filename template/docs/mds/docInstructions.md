# 文档使用说明

## 如何查看文档
* 运行命令
```base
npm run doc
```
* 文档服务启动完成后用浏览器打开http://localhost:9000即可

## 如何添加文档

### 普通文档
* 在目录 **_docs/mds_** 或其子目录下创建md文件
* 在 **_docs/router/index.js_** 文件下加入路由，如
```javascript
{
    path: '/docInstructions',
    component: resolve => require(['../mds/docInstructions.md'], resolve)
}
```
* 这样你就可以使用浏览器预览你的文档了，将文档链接加入主目录(**_docs/mds/index.md_**)或者其它子目录，以便他人可以快速找到它，如
```markdown
[文档使用说明](#/docInstructions)
```

### 组件文档
组件文档因为要展示组件，需要引用 **_src_** 上的组件，所以比普通文档稍微复杂一些

#### 建立文档
建立文档的过程和普通文档差不多，只不过路径和文件有些变化
* 在目录 **_docs/mds/components_** 下创建md文件，建议文件以组件名命名
* 在 **_docs/router/components.js_** 文件下加入路由，如
```javascript
{
    path: '/component/cell',
    component: resolve => require(['../mds/components/cell.md'], resolve)
}
```
* 将链接加入 **_docs/mds/components/index.md_** 目录，目录名字建议用组件名，首字母大写，显得大气一些，如
```markdown
[Cell](#/component/cell)
```
#### 编写文档

##### 如何展示组件
在 **_docs/installComponents_** 文件import你的组件，如
```javascript
import Cell from '$component/cell.vue'

const components = [
    Cell
]
```
`$component` 是 **_src/components/public_** 路径的别名，如果组件是其它路径，自行引入即可
引入组件后，将你的示例代码套入class="demo-block"的元素下即可自动解析出来，如
```markdown
<div class="demo-block">
    <cell label="按钮" value="请选择" :right-arrow="true" @click.native="btnClick"></cell>
    <cell label="显示" :value="content || '纯文本'"></cell>
    <cell label="输入框" type="input" v-model="content" placeholder="请输入"></cell>
</div>
```
可能你还需要用到vue的data属性和methods方法等才能够将组件完全展示出来，这时你只需要将它们包含在script标签里面即可，如
```javascript
<script>
export default {
    data() {
        return {
            content: ''
        };
    },
    methods: {
        btnClick() {
            alert('click...')
        }
    }
}
</script>
```
建议将这段代码放到md文件的最末尾，因为它并不是文档的主要内容

> Note：示例样式可能会遭到Markdown样式的污染，如果发生冲突，请反馈给cuijj

##### 如何加入可缩展的代码
非常简单，只需将markdown代码块包在`::: demo`和`:::`里面即可，如
```markdown
::: demo
```html
<cell label="按钮" value="请选择" :right-arrow="true" @click.native="btnClick"></cell>
<cell label="显示" :value="content || '纯文本'"></cell>
<cell label="输入框" type="input" v-model="content" placeholder="请输入"></cell>
...(这里应是三个`，不要在意这些细节，你懂就行)
:::
```
运行结果如
::: demo
```html
<cell label="按钮" value="请选择" :right-arrow="true" @click.native="btnClick"></cell>
<cell label="显示" :value="content || '纯文本'"></cell>
<cell label="输入框" type="input" v-model="content" placeholder="请输入"></cell>
```
:::

<script>
export default {
    data() {
        return {
            content: ''
        };
    },
    methods: {
        btnClick() {
            alert('click...')
        }
    }
}
</script>

##### 文档模板
为了更清晰的阐述组件的用法，组件文档至少包含以下几点
* 组件使用场景、效果介绍
* 组件基础用法，必须有示例代码，最好能够配合示例代码给出展示效果
* 组件参数说明（至少包括参数名、说明、类型、可选值和默认值几点，推荐使用表格）

可参考如下模板
```markdown
# 组件名
组件使用场景、效果介绍
## 基础用法
组件效果、示例代码
## 参数说明
参数       | 说明             | 类型      | 可选值                                 | 默认值
-------- | -------------- | ------- | ----------------------------------- | -----
type     | 右侧元素类型             | String  | text,input                | text
label    | 左侧显示内容         | String | --                             | --
```
