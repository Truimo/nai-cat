<template>
    <div class="h-10">
        <div class="select-none h-10 px-3.5 bg-gray-100 fixed top-0 left-0 right-0 z-20">
            <div class="h-full leading-10"><span @click="back"><font-awesome-icon icon="angle-left"
                                                                              class="mr-1.5"/>返回</span></div>
        </div>
    </div>
    <section>
        <div class="px-3.5 py-2.5 text-sm text-gray-500 border-l-4 border-red-600 bg-white sticky top-10 z-10">
            今日发言条数排名<span @click="get_ranking_day"><font-awesome-icon icon="redo-alt" pull="right"/></span></div>
        <ul v-if="ranking.day.length > 0">
            <li class="flex items-center justify-between py-2.5 px-3.5 border-t border-gray-200"
                v-for="(item, index) in ranking.day" :key="index">
                <div class="flex items-center">
                    <i>{{ pad(index + 1) }}</i>
                    <div class="w-8 h-8 rounded-full overflow-hidden mx-2">
                        <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ item.user_id +'&s=640'" :alt="item.username">
                    </div>
                    <p class="text-base text-blue-800 truncate">{{ item.username }}</p>
                </div>
                <p class="text-sm text-gray-400 flex-shrink-0">{{ item.count }}条</p>
            </li>
        </ul>
        <div v-else class="p-3.5">
            <p class="text-center text-xs text-gray-600">没有内容哇</p>
        </div>
    </section>
    <section>
        <div class="px-3.5 py-2.5 text-sm text-gray-500 border-l-4 border-red-600 bg-white sticky top-10 z-10">
            总发言条数排名<span @click="get_ranking"><font-awesome-icon icon="redo-alt" pull="right"/></span></div>
        <ul v-if="ranking.all.length > 0">
            <li class="flex items-center justify-between py-2.5 px-3.5 border-t border-gray-200"
                v-for="(item, index) in ranking.all" :key="index">
                <div class="flex items-center">
                    <i>{{ pad(index + 1) }}</i>
                    <div class="w-8 h-8 rounded-full overflow-hidden mx-2">
                        <img v-bind:src="'https://q1.qlogo.cn/g?b=qq&nk='+ item.user_id +'&s=640'" :alt="item.username">
                    </div>
                    <p class="text-base text-blue-800 truncate">{{ item.username }}</p>
                </div>
                <p class="text-sm text-gray-400 flex-shrink-0">{{ item.count }}条</p>
            </li>
        </ul>
        <div v-else class="p-3.5">
            <p class="text-center text-xs text-gray-600">没有内容哇</p>
        </div>
    </section>
</template>

<script>
import {onMounted, reactive} from 'vue'
import {useRouter} from 'vue-router'
import Api from '@/request/api'

export default {
    name: "Ranking",
    setup() {
        document.title = '排行榜'
        const router = useRouter()
        const pad = n => {  //补0
            let l = n.toString().length
            if (l < 2) {
                n = '0' + n
            }
            return n;
        }

        let ranking = reactive({
            _nonce: false,  // 第一次
            day: [],  // 日排行
            all: []  // 全部排行
        })
        const get_ranking_day = () => {
            Api.get('https://yx.api.truimo.com/', {
                ver: 'v1',
                controller: 'ranking',
                function: 'day'
            }).then(res => {
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
            Api.get('https://yx.api.truimo.com/', {
                ver: 'v1',
                controller: 'ranking',
                function: 'all'
            }).then(res => {
                let data = res.data
                if (data.length < 1) {
                    return
                }
                if (typeof data === typeof ranking.all) {
                    ranking.all = data
                }
            })
        }

        const back = () => {
            router.back()
        }

        onMounted(() => {
            get_ranking()
            get_ranking_day()
        })

        return {
            pad, get_ranking_day, get_ranking, ranking, back
        }
    }
}
</script>
