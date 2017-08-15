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
@import '~assets/style/variable.less';
{{#if_eq vux true}}
@import '~vux/src/styles/reset.less';
{{/if_eq}}
{{#if_eq vux false}}
@import '~assets/style/reset.less';
{{/if_eq}}
.child-view {
    position: absolute;
    width: 100%;
    min-height: 100%;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.3s ease;
}
.slide-left-enter,
.slide-right-leave-active {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
}
.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
    opacity: 0;
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
        border: .5px solid @border-base;
    }
    .bd-top {
        border-top: .5px solid @border-base;
    }
    .bd-bottom {
        border-bottom: .5px solid @border-base;
    }
    .bd-left {
        border-left: .5px solid @border-base;
    }
    .bd-right {
        border-right: .5px solid @border-base;
    }
}
</style>
