<template>
    <router-view/>
    <div class="fixed top-0 bottom-0 left-0 right-0 z-20 overscroll-contain">
        <div class="absolute bottom-1/2 right-1/2 bg-white w-4/5 transform-gpu translate-y-1/2 translate-x-1/2">
            cd
        </div>
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}
body {
    overscroll-behavior-y: contain;
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

