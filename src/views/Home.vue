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
                        <li class="px-2.5 py-2 active:bg-gray-300" @click="jump('https://jq.qq.com/?_wv=1027&k=XecsCBlp', '_block')"><font-awesome-icon icon="cog" class="mr-2" />文案群：640064482</li>
                        <li class="px-2.5 py-2 active:bg-gray-300" @click="jump('https://jq.qq.com/?_wv=1027&k=mquWT8e0', '_block')"><font-awesome-icon icon="cog" class="mr-2" />文案群：637076590</li>
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
        <div class="select-none cursor-pointer px-3.5 py-2 bg-blue-200 text-blue-600 text-sm sticky top-10 z-10 clear-both"
             @click="login_popup_toggle(true)"
        >
            登录享用更多功能&ensp;<font-awesome-icon icon="angle-right" />
            <span class="float-right"><font-awesome-icon icon="times-circle" /></span>
        </div>
        <van-pull-refresh
            v-model="post.refreshing"
            @refresh="post_refresh"
            success-text="刷新成功"
        >
            <van-list
                v-model:loading="post.loading"
                :finished="post.finished"
                finished-text="没有更多了"
                error-text="请求失败，点击重新加载"
                @load="post_loader"
            >
                <post-cell v-for="(item, index) in post.list" :key="index" :data="item" />
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import {ref, reactive, inject} from 'vue'
import {List, PullRefresh } from 'vant'
import {useRouter} from 'vue-router'
import Api from '@/request/api'
import Header from '@/components/Header'
import RightMenu from '@/components/RightMenu'
import PostCell from '@/components/PostCell'
import { analysis, moment } from '@/module/helper'

export default {
    name: 'Home',
    components: {
        PostCell,
        [PullRefresh.name]: PullRefresh,
        [List.name]: List,
        Header, RightMenu
    },
    setup() {
        document.title = '动态'
        const router = useRouter()
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

        const post = reactive({
            num: 20, // 加载数量
            page: 0,  // 页数
            loading: false,  // 加载状态
            refreshing: false,  // 刷新状态
            finished: false,  // 加载完毕
            error: false,
            list: [] // 列表
        })
        const post_loader = () => {
            if (post.refreshing) {
                post.page = 0
            }
            Api.get('/', {
                ver: 'v1',
                controller: 'post',
                function: 'list',
                num: post.num,
                str: post.page * 20
            }).then(res => {
                let data = res.data.data
                if (res.data.code !== 0) {
                    if (post.refreshing) {
                        post.refreshing = false
                    }
                    post.error = true
                }
                if (data.length < 1) {
                    post.finished = true
                    return
                }
                if (post.refreshing) {
                    post.refreshing = false
                    post.list = []
                }
                post.page++
                for (let i = 0; i < data.length; i++) {
                    data[i].copy = data[i].content.replace(/\[CQ:.+\]/, 'NaN')
                    data[i].content = analysis(data[i].content)
                    data[i].time = moment(data[i].time)
                    post.list.push(data[i])
                }
                post.loading = false
            }).catch(() => {
                if (post.refreshing) {
                    post.refreshing = false
                }
                post.error = true
            })
        }
        const post_refresh = () => {
            post.refreshing = true
            post.finished = false
            post.loading = true
            post_loader()
        }

        const tog = e => {
            if (e === 2) {
                router.push('ranking')
            }
        }

        const jump = (href, target) => {
            window.open(href, target)
        }

        const login_popup_toggle = inject('login_popup_toggle')

        return {
            nav, right_menu, menu_scroll, menu_user_bg, post, post_loader, post_refresh, tog, moment,
            router, jump, login_popup_toggle
        }
    }
}
</script>
