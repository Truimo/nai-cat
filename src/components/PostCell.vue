<template>
    <div class="p-3.5 bg-gray-100 border-b border-gray-200" @click="to({name: 'Post', params: {id: data.id}})">
        <div class="flex items-center select-none"
             @click.stop="to({name: 'User', params: {group_id: data.group_id, user_id: data.user_id}})">
            <div class="w-9 h-9 rounded-full overflow-hidden mr-2">
                <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ data.user_id +'&s=640'" :alt="data.username">
            </div>
            <div class="flex flex-col">
                <p class="text-base text-blue-800">{{ data.username }}</p>
                <p class="text-xs text-gray-400">{{ data.time }}</p>
            </div>
        </div>
        <div class="mt-2 text-gray-900 text-base font-sans antialiased overflow-hidden break-normal"
             v-html="data.content"></div>
        <div class="mt-2 text-xs flex justify-between items-center">
            <p class="text-gray-600">浏览00次</p>
            <div class="flex items-center">
                <p class="flex items-center text-sm"><img src="../assets/images/xihuan.png" class="w-4 h-4" alt="like"><img src="../assets/images/xihuan-b.png" class="w-4 h-4 hidden" alt="liked"><span class="ml-1">0</span></p>
                <p class="flex items-center text-sm ml-3"><img src="../assets/images/pinglun.png" class="w-4 h-4" alt="comment"><span class="ml-1">0</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    name: "PostCell",
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {
        const router = useRouter()
        const to = obj => {
            router.push(obj)
        }

        return {
            to
        }
    }
}
</script>
