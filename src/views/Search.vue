<template>
    <div class="select-none h-10 bg-gray-100 px-3.5 flex flex-row items-center justify-between text-sm">
        <div class="h-7 leading-7 w-3 mr-1.5" @click="router.push('/')">
            <font-awesome-icon icon="angle-left" />
        </div>
        <input class="w-full h-7 px-1.5 outline-none rounded-l" type="search" maxlength="20" placeholder="关键词搜索">
        <div class="w-1/6 h-7 leading-7 text-center flex-shrink-0 rounded-r transition-colors bg-gray-200 active:bg-gray-100">搜索</div>
    </div>
    <div>
        hello
    </div>
</template>

<script>
import router from '@/router'

export default {
    name: "Search",
    setup() {

        return {
            router
        }
    }
}
</script>

<style scoped>

</style>
