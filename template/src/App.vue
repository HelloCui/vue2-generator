<template>
<div>
    <transition :name="transitionName">
        <keep-alive :exclude="noKeepAlive">
            <router-view class="child-view" :key="$route.fullPath"></router-view>
        </keep-alive>
    </transition>
</div>
</template>

<script>
import noKeepAlive from './router/noKeepAlive.js'
export default {
    name: 'app',
    data() {
        return {
            transitionName: '',
            noAnimate: true,
            noKeepAlive: noKeepAlive
        }
    },
    watch: {
        $route(to, from) {
            let goTo = this.$router.goTo,
                noAnimatePages = {
                    // 从下列页面跳转到其它页面都没有转场动画 eg:['/initial']
                    from: [],
                    // 跳转到下列页面都没有转场动画 eg:['/initial']
                    to: [],
                    // 同时满足to和from时没有转场动画 eg:[{to:'/message/detail', from:'/'}]
                    and: []
                }
            if (noAnimatePages.to.indexOf(to.path) > -1 || noAnimatePages.from.indexOf(from.path) > -1) {
                this.noAnimate = true;
            } else if (noAnimatePages.and.find(item => item.to === to.path && item.from === from.path)) {
                this.noAnimate = true;
            } else {
                this.noAnimate = this.$router.noAnimate || false;
            }
            if (!this.noAnimate) {
                // 判断页面回退还是前进
                if (goTo) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }
            } else {
                this.transitionName = 'no-animate'
            }
            window.scrollTo(0, 0);
            this.$router.goTo = false;
            this.$router.noAnimate = false;
        }
    }
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
