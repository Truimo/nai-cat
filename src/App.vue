<template>
    <router-view v-slot="{ Component }">
        <keep-alive include="Home">
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
    <van-popup
        v-model:show="login_popup_show"
        :close-on-popstate="true"
        :close-on-click-overlay="false"
        :style="{
            width: '88%',
            borderRadius: '8px',
            backgroundColor: '#ffffff'
        }"
        :overlay-style="{
            backgroundColor: 'rgba(0,0,0,.2)'
        }"
    >
        <div class="select-none text-base font-bold text-gray-800 px-3.5 py-3 border-b">须要验证您的身份</div>
        <div class="select-none text-sm text-gray-600 p-3.5">请输入您从QQ群管理员处获得的令牌（token）以验证身份。</div>
        <div class="px-3.5">
            <input class="w-full text-sm px-2 py-1 border border-gray-300 focus:border-gray-600 transition-colors rounded-md placeholder-gray-300 text-gray-800" type="text" placeholder="请输入您的令牌……" autocomplete="off" name="token">
        </div>
        <div class="select-none px-3.5 pt-5 pb-3.5">
            <div class="inline-block px-3 py-1.5 text-sm bg-blue-500 active:bg-blue-600 transition-colors text-white rounded-md"
                 @click="login_popup_show = false"
            >确定</div>
            <div class="inline-block px-3 py-1.5 text-sm bg-gray-500 active:bg-gray-600 transition-colors text-white rounded-md ml-2.5"
                 @click="login_popup_show = false"
            >取消</div>
        </div>
    </van-popup>
</template>

<script>
import { Popup, CellGroup, Field } from 'vant'
import { ref, provide } from 'vue'

export default {
    components: {
        [Popup.name]: Popup,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field
    },
    setup() {
        const login_popup_show = ref(false)
        const login_popup_toggle = open => {
            login_popup_show.value = open
        }
        provide('login_popup_toggle', login_popup_toggle)

        return {
            login_popup_show
        }
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

