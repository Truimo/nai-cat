<template>
    <router-view v-slot="{ Component }">
        <keep-alive include="Home">
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
    <div class="fixed top-0 bottom-0 left-0 right-0 z-20 overscroll-contain hidden">
        <div class="absolute bottom-1/2 right-1/2 bg-white w-4/5 transform-gpu translate-y-1/2 translate-x-1/2">
            <van-cell-group inset>
                <van-field label="文本" placeholder="请输入用户名" />
            </van-cell-group>
        </div>
    </div>
</template>

<script>
import { CellGroup, Field } from 'vant'

export default {
    components: {
        [CellGroup.name]: CellGroup,
        [Field.name]: Field
    },
    setup() {

    }
}
</script>

<style>
html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}
body {
    overscroll-behavior-y: contain;
    overscroll-behavior-x: none;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
}
.t_opacity-0 {
    opacity: 0 !important;
}
</style>

