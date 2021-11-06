<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 select-none" v-show="right_menu_show">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60 transition-opacity ease-in-out" :class="{'t_opacity-0': right_menu_transform === false}" @click="right_menu = false"></div>
        <div class="absolute top-0 bottom-0 left-0 right-24 bg-white transition-transform duration-200 ease-in-out transform" :class="{'-translate-x-80': right_menu_transform === false}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {ref,watch} from 'vue'

export default {
    name: "RightMenu",
    props: {
        open: Boolean
    },
    setup(props, {emit}) {
        let right_menu = ref(false)  // 总体状态
        let right_menu_show = ref(false)  // none
        let right_menu_transform = ref(false)  // 动画
        watch(() => props.open, val => {
            right_menu.value = val
        })
        watch(right_menu, val => {
            if (val) {
                right_menu_show.value = val
                setTimeout(() => {
                    right_menu_transform.value = val
                }, 20)
            } else {
                right_menu_transform.value = val
                setTimeout(() => {
                    right_menu_show.value = val
                }, 200)
            }
            emit('update:open', val)
            emit('onToggle', val)
        })
        return {
            right_menu, right_menu_show, right_menu_transform
        }
    }
}
</script>
