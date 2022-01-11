<template>
    <router-view/>
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

