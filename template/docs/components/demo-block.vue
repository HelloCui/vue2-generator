<template>
<div class="docs-demo-wrapper">
    <span class="docs-trans docs-demo__triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
    <div :style="{height: isExpand ? 'auto' : '0'}" class="demo-container">
        <div span="14">
            <div class="docs-demo docs-demo--expand">
                <div class="highlight-wrapper">
                    <slot name="highlight"></slot>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
export default {
    data() {
        return {
            isExpand: true
        };
    },
    methods: {
        toggle() {
            this.isExpand = !this.isExpand;
        }
    }
};
</script>

<style lang="less" type="text/less">
@dark-grey: #999;
.demo-block {
    @import '~assets/style/reset.less';
    margin-bottom: 10px;
    width: 375px;
    max-height: 667px;
    background-color: #f2f1f6;
    box-shadow: #333 0 0 8px;
}
.docs-demo-wrapper {
    margin-bottom: 15px;
}
.demo-container {
    transition: max-height 0.3s ease;
    overflow: hidden;
}
.docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
}
.docs-trans {
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #C5D9E8;
    font-size: 12px;
    padding: 10px 0;
    background-color: #FAFBFC;
}

.docs-demo__code,
.docs-demo__meta,
.highlight-wrapper {
    overflow-y: auto;
}

.docs-demo__code {
    border-bottom: 1px solid #eee;
}
.docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
}

.docs-demo.docs-demo--expand .docs-demo__triangle {
    transform: rotate(180deg);
}

.highlight-wrapper {
    display: none;
    p,
    pre {
        margin: 0;
    }

    .hljs {
        padding: 0;
    }
}

.docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
}

.docs-demo__code__mobi {
    height: 620px;
    margin: 20px 0;
}

.docs-demo__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
    background: linear-gradient(rgba(55,55,55,.98),#545456);
    text-align: center;
    padding: 8px;

    img {
        width: 100%;
    }

    .url-box {
        height: 28px;
        line-height: 28px;
        color: #fff;
        padding: 0 3px;
        background-color: #a2a2a2;
        margin: 10px auto 0;
        border-radius: 4px;
        white-space: nowrap;
        overflow-x: auto;
    }
}

.docs-demo__code__mobi__content {
    iframe {
        width: 100%;
        border: 0;
        height: 548px;
    }
}
</style>
