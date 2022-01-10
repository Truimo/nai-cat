<template>
    <Header :nav="nav" @toggle="tog" @clickLeft="right_menu = true" @clickRight="router.push('search')" />
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
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">QQ群</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />文案群：640064482</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />文案群：637076590</li>
                    </ul>
                </div>
                <div class="m-3 bg-white rounded-md shadow-sm overflow-hidden">
                    <p class="text-gray-500 text-xs border-gray-100 border-b px-2.5 py-2.5">服务支持</p>
                    <ul class="text-base text-gray-700">
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />昵称：浅小沫</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />QQ：3201719830</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />邮箱：a@nai.cat</li>
                        <li class="px-2.5 py-2 active:bg-gray-300"><font-awesome-icon icon="cog" class="mr-2" />RUN BY VUE</li>
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
    <div class="container mx-auto">
        <div v-if="postList.length > 0">
            <div class="p-3.5 bg-gray-100 border-b border-gray-200 transition-colors" v-for="(item, index) in postList" :key="index">
                <div class="flex items-center select-none relative">
                    <div class="w-9 h-9 rounded-full overflow-hidden mr-2">
                        <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ item.user_id +'&s=640'" alt="{{ item.username }}">
                    </div>
                    <div class="flex flex-col">
                        <p class="text-base text-blue-800">{{ item.username }}</p>
                        <p class="text-xs text-gray-400">{{ item.time }}</p>
                    </div>
                    <div class="absolute right-0 flex items-center">
                        <div class="h4 w-4" @click.stop="copy(item.copy)">
                            <img class="h-full w-full" src="../assets/images/fuzhi.png" alt="复制">
                        </div>
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
        <div class="fixed z-20 top-0 bottom-0 right-0 left-0 bg-white overflow-y-scroll overscroll-contain" v-show="page_more">
            <div class="select-none h-10 px-3.5 bg-gray-100">
                <div class="h-full leading-10"><span @click="page_more = false"><font-awesome-icon icon="angle-left" class="mr-1.5" />返回</span></div>
            </div>
            <div class="px-3.5 py-2.5 text-sm text-gray-500 border-l-4 border-red-600">今日发言条数排名<span @click="get_ranking_day"><font-awesome-icon icon="redo-alt" pull="right" /></span></div>
            <ul v-if="ranking.day.length > 0">
                <li class="flex items-center justify-between py-2.5 px-3.5 border-b border-gray-200" v-for="(item, index) in ranking.day" :key="index">
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
            <ul v-if="ranking.all.length > 0">
                <li class="flex items-center justify-between py-2.5 px-3.5 border-b border-gray-200" v-for="(item, index) in ranking.all" :key="index">
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
    <transition name="tip">
        <div class="tooltips" v-show="_tip.show">{{ _tip.content }}</div>
    </transition>
</template>

<script>
import {ref, onMounted, reactive} from 'vue'
import router from '@/router'
import Api from '@/request/api'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import Header from '@/components/Header'
import RightMenu from '@/components/RightMenu'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
import '@/assets/css/tooltips.css'

export default {
    name: 'Home',
    components: {
        Header, RightMenu
    },
    setup() {
        document.title = '动态'
        const nav = [
            {
                name: '动态',
                default: true
            },{
                name: '广场'
            },{
                name: '排行'
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
            Api.get('post.php', {
                num: 20,
                str: page * 20
            }).then(res => {
                let data = res.data
                if (data.length < 1) {
                    isEnd.value = true
                    return
                }
                page++
                for (let i = 0; i < data.length; i++) {
                    data[i].copy = data[i].content.replace(/\[CQ:.+\]/, 'NaN')
                    data[i].content = analysis(data[i].content)
                    data[i].time = moment(data[i].time)
                    postList.value.push(data[i])
                }
            })
        }

        const moment = t => {  // 人性化时间
            return dayjs(dayjs.unix(t)).fromNow()
        }

        const tog = e => {
            if (e === 2) {
                if (!ranking._nonce) {
                    setTimeout(() => {  // 避免和动画
                        get_ranking()
                        get_ranking_day()
                    }, 200)
                    ranking._nonce = true
                }
                page_more.value = true
            }
        }

        let page_more = ref(false)  // 更多页面
        let ranking = reactive({
            _nonce: false,  // 第一次
            day: [],  // 日排行
            all: []  // 全部排行
        })
        const get_ranking_day = () => {
            Api.get('ranking_day.php').then(res => {
                let data = res.data

                if (data.length < 1) {
                    return
                }
                if (typeof data === typeof ranking.day) {
                    ranking.day = data
                }
            })
        }
        const get_ranking = () => {
            Api.get('ranking.php').then(res => {
                let data = res.data
                if (data.length < 1) {
                    return
                }
                if (typeof data === typeof ranking.all) {
                    ranking.all = data
                }
            })
        }

        const pad = n => {  //补0
            let l = n.toString().length
            if (l < 2) {
                n = '0' + n
            }
            return n;
        }
        const copy = s => {
            if (window.clipboardData) {
                window.clipboardData.setData('text',s);
            } else {
                (s => {
                    document.oncopy = e => {
                        e.clipboardData.setData('text', s);
                        e.preventDefault();
                        document.oncopy=null;
                    }
                })(s);
                document.execCommand('Copy');
            }
            tip('复制成功')
        }


        let _tip = reactive({
            time: null,
            content: 'NULL',
            show: false
        })
        const tip = s => {
            clearTimeout(_tip.time)
            _tip.content = s
            _tip.show = true
            _tip.time = setTimeout(() => {
                _tip.show = false
            }, 800)
        }

        onMounted(() => {
            loadPost()  // 加载内容
        })

        return {
            nav, right_menu, menu_scroll, menu_user_bg, postList, isEnd, loadPost, tog, moment, page_more,
            get_ranking_day, pad, ranking, get_ranking, router, copy, _tip
        }
    }
}
</script>
<style>
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

.tip-enter-active {
    @apply transition-opacity ease-out duration-200;
}
.tip-leave-active {
    @apply transition-opacity ease-out duration-200;
}
.tip-enter-from, .tip-leave-to {
    @apply transform-gpu opacity-0;
}
.tip-enter-to, .tip-leave-from {
    @apply transform-gpu opacity-100;
}
</style>
