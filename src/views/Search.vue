<template>
    <div class="select-none h-10">
        <div class="fixed top-0 left-0 right-0 h-10 px-3.5 flex flex-row items-center justify-between text-sm bg-gray-100">
            <div class="h-7 leading-7 w-3 mr-1.5" @click="router.push('/')">
                <font-awesome-icon icon="angle-left" />
            </div>
            <input class="w-full h-7 px-1.5 outline-none rounded-l" type="search" maxlength="20" placeholder="关键词搜索" v-model="keyword" @keyup.enter="submit">
            <div class="w-1/6 h-7 leading-7 text-center flex-shrink-0 rounded-r transition-colors bg-gray-200 active:bg-gray-100" @click="submit">搜索</div>
        </div>
    </div>
    <div class="text-xs mx-3.5 py-2 text-gray-500">
        <p v-if="count > 0">为您找到相关结果约{{ count }}个</p>
        <p v-else-if="count === 0">未找到相关结果</p>
        <p v-else>输入关键词以搜索</p>
    </div>
    <div class="container">
        <div v-if="postList.length > 0">
            <div class="p-3.5 bg-gray-100 border-b border-gray-200" v-for="(item, index) in postList" :key="index">
                <div class="flex items-center select-none">
                    <div class="w-9 h-9 rounded-full overflow-hidden mr-2">
                        <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ item.user_id +'&s=640'" alt="{{ item.username }}">
                    </div>
                    <div class="flex flex-col">
                        <p class="text-base text-blue-800">{{ item.username }}</p>
                        <p class="text-xs text-gray-400">{{ item.time }}</p>
                    </div>
                </div>
                <div class="mt-2 text-gray-900 text-base font-sans antialiased" v-html="item.content"></div>
            </div>
            <div class="p-3.5 bg-gray-100 active:bg-gray-300 transition cursor-not-allowed" v-if="isEnd">
                <p class="text-center text-xs text-gray-600">没有更多啦</p>
            </div>
            <div class="p-3.5 bg-gray-100 active:bg-gray-300 transition cursor-pointer" @click="get_post" v-else>
                <p class="text-center text-xs text-gray-600">加载更多</p>
            </div>
        </div>
        <div v-else class="p-3.5">
            <p class="text-center text-xs text-gray-600">没有内容哇</p>
        </div>
    </div>
</template>

<script>
import Api from '@/request/api'
import router from '@/router'
import {ref} from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export default {
    name: "Search",
    setup() {
        document.title = '搜索'
        const moment = t => {  // 人性化时间
            return dayjs(dayjs.unix(t)).fromNow()
        }
        const analysis = (content) => {  // 解析
            try {
                content = content.replace(/\r\n/g, '<br/>')
                content = content.replace(/\n/g, '<br/>')
                content = content.replace(/\[CQ:.+\]/g, '<i class="text-gray-400">NaN</i>')
                content = content.replace(new RegExp(keyword_search,'g'), '<em class="bg-yellow-100 not-italic">$&</em>')
            } catch (e) {
                console.log('解析出错')
            }
            return content
        }

        let keyword = ref('')
        let keyword_search = ''
        let count = ref(-1)
        const get_count = () => {
            if (count.value === -1 && keyword_search === '') return
            Api.get('search_count.php', {
                keyword: keyword_search
            }).then(res => {
                let data = res.data
                if (data.code === -1) {
                    count.value = 0
                    return
                }
                count.value = parseInt(data.count)
            })
        }

        let page = 0
        let isEnd = ref(false)
        let postList = ref([])
        const get_post = () => {
            Api.get('search.php', {
                num: 20,
                str: page * 20,
                keyword: keyword_search
            }).then(res => {
                let data = res.data
                if (data.length < 1) {
                    isEnd.value = true
                    return
                }
                page++
                for (let i = 0; i < data.length; i++) {
                    data[i].content = analysis(data[i].content)
                    data[i].time = moment(data[i].time)
                    postList.value.push(data[i])
                }
            })
        }

        const submit = () => {
            if (keyword.value === '') return
            keyword_search = keyword.value
            get_count()
            page = 0
            isEnd.value = false
            postList.value = []
            get_post()
        }
        return {
            router, moment, keyword, count, get_count, submit, postList, isEnd, get_post
        }
    }
}
</script>

<style scoped>

</style>
