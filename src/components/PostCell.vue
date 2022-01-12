<template>
    <div class="p-3.5 bg-gray-100 border-b border-gray-200" @click="to({name: 'Post', params: {id: data.id}})">
        <div class="flex items-center select-none relative">
            <div class="w-9 h-9 rounded-full overflow-hidden mr-2">
                <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ data.user_id +'&s=640'" :alt="data.username">
            </div>
            <div class="flex flex-col">
                <p class="text-base text-blue-800">{{ data.username }}</p>
                <p class="text-xs text-gray-400">{{ data.time }}</p>
            </div>
            <div class="absolute right-0 flex items-center">
                <div class="h4 w-4" @click.stop="copy(data.copy)">
                    <img class="h-full w-full" src="../assets/images/fuzhi.png" alt="复制">
                </div>
            </div>
        </div>
        <div class="mt-2 text-gray-900 text-base font-sans antialiased overflow-hidden break-normal"
             v-html="data.content"></div>
    </div>
</template>

<script>
import copytoclipboard from '@/module/copytoclipboard'
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
        const copy = copytoclipboard
        const to = obj => {
            router.push(obj)
        }

        return {
            copy, to
        }
    }
}
</script>
