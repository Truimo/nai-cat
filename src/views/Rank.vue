<template>
    <header class="select-none h-10">
        <nav class="fixed top-0 left-0 right-0 px-3.5 bg-gray-100 h-10 leading-10 text-black flex flex-row items-center justify-between">
            <a class="flex-shrink-0 inline-block h-8 leading-8 align-middle" @click="router.push('/')">
                <font-awesome-icon icon="angle-left" /> 返回
            </a>
            <a class="text-base">专属头衔</a>
            <a class="flex-shrink-0 inline-block h-8 leading-8 align-middle" @click="set">完成</a>
        </nav>
    </header>
    <div class="container mx-auto">
        <div class="relative">
            <div class="pt-2.5 px-3.5 h-10 flex items-center">
                <div class="w-8 h-8 rounded-full overflow-hidden mr-2.5">
                    <img :src="'https://q1.qlogo.cn/g?b=qq&nk='+ info.user_id +'&s=640'" :alt="info.username">
                </div>
                <p class="text-sm">{{ info.username }}</p>
            </div>
            <div class="pt-2.5">
                <input class="h-10 w-full px-3.5 outline-none"
                       placeholder="头衔"
                       autocapitalize="off" maxlength="20"
                       @input="filter"
                       v-model="val"
                >
                <p class="px-3.5 text-right text-xs mt-1" :class="{'text-red-500': num > 6}">{{ num }}/6</p>
            </div>
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-gray-100 bg-opacity-80 flex items-center justify-center"
                 v-if="tip"
            >
                <p>{{ tip }}</p>
            </div>
        </div>
        <div class="mt-20 px-3.5 text-sm text-gray-500">
            <p>1.一个月只能自主修改一次</p>
            <p>2.如果内容为空表示删除专属头衔</p>
            <p>3.无法获取到授权的情况，请重新获取链接</p>
            <p>4.QQ头衔的最大长度为6个字符，超出会被忽略</p>
            <p>5.如果有问题或者BUG，联系群主大大给你解决哦，QwQ</p>
        </div>
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {reactive, ref} from 'vue'

export default {
    name: "Rank",
    setup() {
        const router = useRouter()
        const route = useRoute()

        let val = ref('')
        let num = ref(0)
        let info = reactive({
            user_id: 3201719830,
            username: '西柚味的风'
        })

        const filter = () => {
            num.value = val.value.length
        }

        let query = {
            user_id: route.query.u,
            token: route.query.t
        }

        let tip = ref('加载中')

        const get_token = () => {
            if (!query.user_id || !query.token) {
                tip.value = '未知信息'
                return
            }
            fetch('https://req.truimo.com/yixi/qq_token.php?user_id='+ query.user_id +'&token='+ query.token)
                .then(response => response.json())
                .then(data => {
                    if (data.code === 0) {
                        info.user_id = data.data.user_id
                        info.username = data.data.nickname
                        val.value = data.data.title
                        tip.value = ''
                    } else {
                        tip.value = data.message
                    }
                })
        }
        get_token()

        const set = () => {
            if (!query.user_id || !query.token) {
                tip.value = '未知信息'
                return
            }
            fetch('https://req.truimo.com/yixi/qq_title.php?user_id='+ query.user_id +'&token='+ query.token +'&tx='+ val.value)
                .then(response => response.json())
                .then(data => {
                    if (data.code === 0) {
                        alert('提交成功！')
                    } else {
                        alert(data.message)
                    }
                })
        }

        return {
            router, val, num, info, tip,
            filter, set
        }
    }
}
</script>

<style>
body {
    background-color: #f5f6fa;
}
</style>
