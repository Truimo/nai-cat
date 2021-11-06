<template>
    <Header v-bind:nav="nav" @toggle="tog" @clickLeft="right_menu = true" />
    <RightMenu v-model:open="right_menu">
        <div class="bg-gray-50 h-full w-full overflow-y-scroll" @scroll.stop="menu_scroll">
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
        <div>
            总有一天人间日落和星光我只陪你看.
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import Header from '@/components/Header'
import RightMenu from '@/components/RightMenu'

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
                name: '栖村'
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

        const tog = e => {
          console.log(e)
        }
        return {
            nav, right_menu, menu_scroll, menu_user_bg, tog
        }
    }
}
</script>
