<template>
    <div class="h-10">
        <div class="select-none h-10 px-1.5 bg-gray-50 fixed top-0 left-0 right-0 z-20 flex items-center justify-between">
            <div class="flex-shrink-0 h-10 w-10 relative nc-por" @click="back">
                <img src="../assets/images/fanhui.png" class="h-5 w-5 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2" alt="返回">
            </div>
            <div class="w-full mx-1.5">动态</div>
            <div class="flex-shrink-0 h-10 w-10 relative nc-por" @click="share_show = true">
                <img src="../assets/images/gengduo-y.png" class="h-6 w-6 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2" alt="更多">
            </div>
        </div>
    </div>
    <van-skeleton title avatar :row="2" :loading="post.loading">
        <div class="p-3.5 bg-gray-50">
            <div class="flex items-center select-none">
                <div class="w-9 h-9 rounded-full overflow-hidden mr-2">
                    <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ post.user_id +'&s=640'" :alt="post.username">
                </div>
                <div class="flex flex-col">
                    <p class="text-base text-blue-800">{{ post.username }}</p>
                    <p class="text-xs text-gray-400">{{ post.time }}</p>
                </div>
            </div>
            <div class="mt-2 text-gray-900 text-base font-sans antialiased overflow-hidden break-normal"
                 v-html="post.content"></div>
        </div>
    </van-skeleton>
<!--    <van-tabs shrink sticky animated>-->
<!--        <van-tab title="评论">-->
<!--            内容-->
<!--        </van-tab>-->
<!--        <van-tab title="点赞">-->
<!--            内容-->
<!--        </van-tab>-->
<!--    </van-tabs>-->
    <van-share-sheet
        v-model:show="share_show"
        title="分享给好友"
        :options="share_options"
        @select="share_select"
    />
</template>

<script>
import { ConfigProvider, Tab, Tabs, ShareSheet, Skeleton, Toast } from 'vant'
import { useRoute } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import Api from '@/request/api'
import moment from '@/module/moment'
import analysis from '@/module/analysis'
import copytoclipboard from '@/module/copytoclipboard'

export default {
    name: "Post",
    components: {
        [ConfigProvider.name]: ConfigProvider,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [ShareSheet.name]: ShareSheet,
        [Skeleton.name]: Skeleton
    },
    setup() {
        const route = useRoute()
        const post_id = route.params.id
        const back = () => {
            window.history.back()
        }
        const post = reactive({
            loading: true,
            user_id: 3201719830,
            username: '',
            time: '',
            content: '',
            copy: ''
        })

        const post_loader = () => {
            Api.get('https://yx.api.truimo.com/', {
                ver: 'v1',
                controller: 'post',
                function: 'get',
                post_id: post_id
            }).then(res => {
                res = res.data
                if (res.code === 0) {
                    post.user_id = res.data.user_id
                    post.username = res.data.username
                    post.content = analysis(res.data.content)
                    post.time = moment(res.data.time)
                    post.copy = res.data.content.replace(/\[CQ:.+\]/, 'NaN')
                    post.loading = false
                } else {
                    Toast.fail({
                        icon: 'cross',
                        message: res.message,
                        overlay: true,
                        closeOnClickOverlay: true,
                        duration: 0,
                        onClose: () => {
                            back()
                        }
                    });
                }
            })
        }

        const share_show = ref(false)
        const share_options = [
            { name: '复制内容', icon: 'link', action: 'copy' },
            { name: '复制链接', icon: 'link', action: 'link' }
        ]
        const share_select = op => {
            switch (op.action) {
                case 'copy':
                    copytoclipboard(post.copy)
                    break
                case 'link':
                    copytoclipboard(window.location.href)
                    break
            }
            share_show.value = false
        }

        onMounted(() => {
            post_loader()
        })

        return {
            back, post, share_show, share_options, share_select
        }
    }
}
</script>

<style scoped>
.nc-por::before {
    content: '';
    display: block;
    background-color: inherit;
    border-radius: 50%;
    opacity: .8;
    @apply w-9 h-9 absolute bottom-1/2 right-1/2 transform-gpu translate-y-1/2 translate-x-1/2 scale-75;
    will-change: transform, opacity, background-color;
}
.nc-por:active.nc-por::before {
    background-color: rgba(0,0,0, .2);
    transition: all ease-in-out 120ms;
    opacity: 1;
    @apply scale-100;
}

.van-tabs {
    --van-tabs-nav-background-color: #F9FAFB;
    --van-tabs-line-height: 2rem;
    --van-padding-xs: 12px;
}

.van-skeleton {
    --van-skeleton-avatar-size: 2.25rem;
    --van-skeleton-row-height: 20px;
    --van-skeleton-row-background-color: rgb(229, 231, 235);
    --van-skeleton-avatar-background-color: rgb(229, 231, 235);
    @apply p-3.5 bg-gray-50;
}
</style>
