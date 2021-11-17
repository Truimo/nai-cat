<template>
    <Header v-bind:nav="nav" @toggle="tog" @clickLeft="right_menu = true" @clickRight="router.push('search')" />
    <RightMenu v-model:open="right_menu">
        <div class="bg-gray-50 h-full w-full overflow-y-scroll overscroll-contain" @scroll.stop="menu_scroll">
            <div class="px-3.5 h-12 flex items-center fixed top-0 right-0 left-0 transition" :class="{'bg-white': menu_user_bg}">
                <div class="w-8 h-8 rounded-full overflow-hidden mr-2.5">
                    <img src="https://q1.qlogo.cn/g?b=qq&nk=3201719830&s=640" alt="浅小沫">
                </div>
                <p class="text-sm">
                    西柚味的风 <font-awesome-icon icon="angle-right" />
                </p>
            </div>
            <div class="pt-12">
                <div class="m-3.5 bg-white rounded-md shadow-sm overflow-hidden">
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">音乐服务</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                    </ul>
                </div>
                <div class="m-3 bg-white rounded-md shadow-sm overflow-hidden">
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">音乐服务</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                    </ul>
                </div>
                <div class="m-3 bg-white rounded-md shadow-sm overflow-hidden">
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">音乐服务</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                    </ul>
                </div>
                <div class="m-3 bg-white rounded-md shadow-sm overflow-hidden">
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">音乐服务</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                    </ul>
                </div>
                <div class="m-3 bg-white rounded-md shadow-sm overflow-hidden">
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">音乐服务</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />我的信息</li>
                    </ul>
                </div>
            </div>
        </div>
    </RightMenu>
    <div class="container">
        <div v-if="postList.length > 0">
            <div class="p-3.5 bg-gray-100 border-b border-gray-200" v-for="(item, index) in postList" :key="index">
                <div class="flex items-center">
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
            <div class="p-3.5 bg-gray-100 active:bg-gray-300 transition cursor-pointer" @click="loadPost" v-else>
                <p class="text-center text-xs text-gray-600">加载更多</p>
            </div>
        </div>
        <div v-else class="p-3.5">
            <p class="text-center text-xs text-gray-600">没有内容哇</p>
        </div>
    </div>
    <transition name="page">
        <div class="fixed top-0 bottom-0 right-0 left-0 bg-white overflow-y-scroll overscroll-contain" v-show="page_more">
            <div class="select-none h-10 px-3.5 bg-gray-100">
                <div class="h-full leading-10"><span @click="page_more = false"><font-awesome-icon icon="angle-left" class="mr-1.5" />返回</span></div>
            </div>
            <div class="px-3.5 py-2.5 text-sm text-gray-500 border-l-4 border-red-600">今日发言条数排名<span @click="get_ranking_day"><font-awesome-icon icon="redo-alt" pull="right" /></span></div>
            <ul v-if="ranking_day.length > 0">
                <li class="flex items-center justify-between py-2.5 px-3.5 border-b border-gray-200" v-for="(item, index) in ranking_day" :key="index">
                    <div class="flex items-center">
                        <i>{{ pad(index +1) }}</i>
                        <div class="w-8 h-8 rounded-full overflow-hidden mx-2">
                            <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ item.user_id +'&s=640'" alt="{{ item.username }}">
                        </div>
                        <p class="text-base text-blue-800 truncate">{{ item.username }}</p>
                    </div>
                    <p class="text-sm text-gray-400">{{ item.count }}条</p>
                </li>
            </ul>
            <div v-else class="p-3.5">
                <p class="text-center text-xs text-gray-600">没有内容哇</p>
            </div>
            <div class="px-3.5 py-2.5 text-sm text-gray-500 border-l-4 border-red-600">总发言条数排名<span @click="get_ranking"><font-awesome-icon icon="redo-alt" pull="right" /></span></div>
            <ul v-if="ranking.length > 0">
                <li class="flex items-center justify-between py-2.5 px-3.5 border-b border-gray-200" v-for="(item, index) in ranking" :key="index">
                    <div class="flex items-center">
                        <i>{{ pad(index +1) }}</i>
                        <div class="w-8 h-8 rounded-full overflow-hidden mx-2">
                            <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ item.user_id +'&s=640'" alt="{{ item.username }}">
                        </div>
                        <p class="text-base text-blue-800 truncate">{{ item.username }}</p>
                    </div>
                    <p class="text-sm text-gray-400">{{ item.count }}条</p>
                </li>
            </ul>
            <div v-else class="p-3.5">
                <p class="text-center text-xs text-gray-600">没有内容哇</p>
            </div>
        </div>
    </transition>
</template>

<script>
import {ref} from 'vue'
import router from '@/router'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import Header from '@/components/Header'
import RightMenu from '@/components/RightMenu'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export default {
    name: 'Home',
    components: {
        Header, RightMenu
    },
    setup() {
        const nav = [
            {
                name: '动态',
                default: true
            },{
                name: '更多'
            }
        ]
        let right_menu = ref(false)
        let menu_user_bg = ref(0)
        const menu_scroll = e => {
            let top = e.target.scrollTop
            if (top > 8) {
                menu_user_bg.value = 1
            } else {
                menu_user_bg.value = 0
            }
        }

        const analysis = (content) => {  // 解析
            try {
                content = content.replace(/\r\n/g, '<br/>')
                content = content.replace(/\n/g, '<br/>')
                content = content.replace(/\[CQ:.+\]/, '<i class="text-gray-400">NaN</i>')
            } catch (e) {
                console.log('解析出错')
            }
            return content
        }

        let page = 0
        let isEnd = ref(false)
        let postList = ref([])
        const loadPost = () => {
            fetch('https://req.truimo.com/yixi/post.php?num=20&str='+ (page * 20))
                .then(response => response.json())
                .then(data => {
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
        loadPost()

        const moment = t => {  // 人性化时间
            return dayjs(dayjs.unix(t)).fromNow()
        }

        const tog = e => {
            if (e === 1) {
                page_more.value = true
            }
            console.log(e)
        }

        let page_more = ref(false)  // 更多页面
        let ranking_day = ref([])  // 日排行
        const get_ranking_day = () => {
            fetch('https://req.truimo.com/yixi/ranking_day.php')
                .then(response => response.json())
                .then(data => {
                    if (data.length < 1) {
                        return
                    }
                    if (typeof data === typeof ranking_day.value) {
                        ranking_day.value = data
                    }
                })
        }
        get_ranking_day();
        let ranking = ref([])  // 排行
        const get_ranking = () => {
            fetch('https://req.truimo.com/yixi/ranking.php')
                .then(response => response.json())
                .then(data => {
                    if (data.length < 1) {
                        return
                    }
                    if (typeof data === typeof ranking.value) {
                        ranking.value = data
                    }
                })
        }
        get_ranking()

        const pad = n => {  //补0
            let l = n.toString().length
            if (l < 2) {
                n = '0' + n
            }
            return n;
        }

        return {
            nav, right_menu, menu_scroll, menu_user_bg, postList, isEnd, loadPost, tog, moment, page_more,
            ranking_day, get_ranking_day, pad, ranking, get_ranking, router
        }
    }
}
</script>
<style scoped>
.page-enter-active {
    @apply transition-transform ease-out duration-200;
}
.page-leave-active {
    @apply transition-transform ease-out duration-200;
}
.page-enter-from, .page-leave-to {
    @apply transform-gpu translate-x-full;
}
.page-enter-to, .page-leave-from {
    @apply transform-gpu translate-x-0;
}
</style>
