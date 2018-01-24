<template>
<div id="app" class="markdown-body">
    <router-view/>
</div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>

</style>
<style lang="less" type="text/less">
@import '~github-markdown-css/github-markdown.css';
@import '~highlight.js/styles/github.css';
@border-base: #e8e8e8;
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
.full-border {
    .bd {
        border: 1px solid @border-base;
    }
    .bd-top {
        border-top: 1px solid @border-base;
    }
    .bd-bottom {
        border-bottom: 1px solid @border-base;
    }
    .bd-left {
        border-left: 1px solid @border-base;
    }
    .bd-right {
        border-right: 1px solid @border-base;
    }
}

.half-border {
    .bd {
        border: 0.5px solid @border-base;
    }
    .bd-top {
        border-top: 0.5px solid @border-base;
    }
    .bd-bottom {
        border-bottom: 0.5px solid @border-base;
    }
    .bd-left {
        border-left: 0.5px solid @border-base;
    }
    .bd-right {
        border-right: 0.5px solid @border-base;
    }
}
</style>
