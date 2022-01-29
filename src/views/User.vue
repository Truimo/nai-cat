<template>
    <div class="h-10">
        <div class="select-none h-10 px-1.5 bg-gray-50 fixed top-0 left-0 right-0 z-20 flex items-center justify-between">
            <div class="flex-shrink-0 h-10 w-10 relative nc-por" @click="back">
                <img src="../assets/images/fanhui.png" class="h-5 w-5 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2" alt="返回">
            </div>
            <div class="w-full mx-1.5">他</div>
            <div class="flex-shrink-0 h-10 w-10 relative nc-por">
                <img src="../assets/images/gengduo-y.png" class="h-6 w-6 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2" alt="更多">
            </div>
        </div>
    </div>
    <div class="nc_bg_img h-48 relative" :style="{
        backgroundImage: 'url('+ require('@/assets/images/user-default-bg.jpg') +')'
    }">
        <div class="absolute bottom-0 left-0 right-0 px-3.5 py-2.5 flex items-center select-none">
            <div class="w-16 h-16 rounded-full overflow-hidden mr-2.5">
                <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ user.user_id +'&s=640'" :alt="user.username">
            </div>
            <div class="flex flex-col">
                <p class="text-xl text-blue-50">{{ user.username }}</p>
                <p class="text-sm text-gray-400">发言：888</p>
            </div>
        </div>
    </div>

</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import Api from '@/request/api'

export default {
    name: "User",
    setup() {
        const route = useRoute()
        const group_id = route.params.group
        const post_id = route.params.id
        const back = () => {
            window.history.back()
        }

        const user = reactive({
            username: '浅小沫',
            user_id: 3201719830
        })

        console.log(group_id, post_id)

        const get_user = () => {
            Api.get('/', {
                ver: 'v1',
                controller: 'user',
                function: 'info'
            }).then(res => {

                console.log(res)
            })

        }

        onMounted(() => {
            get_user()
        })


        return {
            back, user
        }
    }
}
</script>

