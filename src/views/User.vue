<template>
    <div class="h-10">
        <div class="select-none h-10 px-1.5 bg-gray-50 fixed top-0 left-0 right-0 z-20 flex items-center justify-between">
            <div class="flex-shrink-0 h-10 w-10 relative nc-por" @click="back">
                <img src="../assets/images/fanhui.png" class="h-5 w-5 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2" alt="返回">
            </div>
            <div class="w-full mx-1.5">动态</div>
            <div class="flex-shrink-0 h-10 w-10 relative nc-por">
                <img src="../assets/images/gengduo-y.png" class="h-6 w-6 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2" alt="更多">
            </div>
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'

export default {
    name: "User",
    setup() {
        const route = useRoute()
        const post_id = route.params.id
        const back = () => {
            window.history.back()
        }
        console.log(post_id)

        return {
            back
        }
    }
}
</script>

