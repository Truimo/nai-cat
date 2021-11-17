<template>
    <header class="select-none h-10">
        <nav class="fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-3.5 bg-gray-100 h-10">
            <a class="inline-block h-8 w-8 align-middle text-center text-black" @click="left">
                <font-awesome-icon icon="bars" class="align-bottom" />
            </a>
            <ul class="flex flex-row items-center justify-evenly w-3/5" :class="{'hidden':nav.length <= 0}">
                <li v-for="(item, index) in nav" v-bind:key="index" @click="check(index)">
                    <a class="p-1.5 text-black text-opacity-90 hover:text-opacity-82 cursor-pointer" :class="{'text-red-600':index === choose}">{{item.name}}</a>
                </li>
            </ul>
            <a class="inline-block h-7 w-7 rounded-full align-middle text-center text-white bg-rose-500" @click="right">
                <font-awesome-icon icon="search" class="align-middle text-xs" />
            </a>
        </nav>
    </header>
</template>

<script>
import {ref} from 'vue'

export default {
    name: "Header",
    props: {
        nav: Array
    },
    setup(props, {emit}) {
        let choose = ref(0)
        const check = index => {
            choose.value = index
            emit('toggle', choose.value)
        }
        const left = () => {
            emit('clickLeft')
        }
        const right = () => {
            emit('clickRight')
        }
        return {
            choose, check, left, right
        }
    }
}
</script>
