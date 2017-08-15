<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
{{#if_eq vux true}}
@import '~vux/src/styles/reset.less';
{{/if_eq}}

body {
  background-color: #f4f4f4;
}
</style>
