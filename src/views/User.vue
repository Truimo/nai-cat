<template>
    <div class="h-10">
        <div class="select-none h-10 px-1.5 bg-gray-50 fixed top-0 left-0 right-0 z-20 flex items-center justify-between">
            <div class="flex-shrink-0 h-10 w-10 relative nc-por" @click="back">
                <img src="../assets/images/fanhui.png"
                     class="h-5 w-5 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2"
                     alt="返回">
            </div>
            <div class="w-full mx-1.5">他</div>
            <div class="flex-shrink-0 h-10 w-10 relative nc-por">
                <img src="../assets/images/gengduo-y.png"
                     class="h-6 w-6 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2"
                     alt="更多">
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="nc_bg_img h-48 relative" :style="{
        backgroundImage: 'url('+ require('@/assets/images/user-default-bg.jpg') +')'
    }">
            <div class="absolute bottom-0 left-0 right-0 px-3.5 py-2.5 flex items-center select-none">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-2.5">
                    <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ user.user_id +'&s=640'" :alt="user.username">
                </div>
                <div class="flex flex-col">
                    <p class="text-xl text-blue-50">{{ user.username }}</p>
                    <p class="text-sm text-gray-400 hidden">info</p>
                </div>
            </div>
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
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import Api from '@/request/api'
import {Toast, PullRefresh, List} from 'vant'
import {trim} from '@/module/func'
import postCell from '@/components/PostCell'
import { analysis, moment } from '@/module/helper'

export default {
    name: "User",
    components: {
        [PullRefresh.name]: PullRefresh,
        [List.name]: List,
        postCell
    },
    setup() {
        const route = useRoute()
        const group_id = route.params.group_id
        const user_id = route.params.user_id
        const back = () => {
            window.history.back()
        }

        const user = reactive({
            username: '浅小沫',
            user_id: 3201719830
        })

        const get_user = () => {
            Api.get('/', {
                ver: 'v1',
                controller: 'user',
                function: 'info',
                group_id: group_id,
                user_id: user_id
            }).then(res => {
                res = res.data
                if (res.code === 0) {
                    user.user_id = res.data.user_id
                    user.username = trim(res.data.card) ? res.data.card : res.data.nickname
                } else {
                    Toast.fail(res.message)
                }
            })

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
                function: 'user',
                group_id: group_id,
                user_id: user_id,
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


        onMounted(() => {
            get_user()
        })


        return {
            back, user, post, post_refresh, post_loader
        }
    }
}
</script>

