<template>
    <div class="empty">
        <van-empty image="error" description="页面走丢了哇">
            <van-button plain round type="danger" size="lager" class="empty-button" to="/">返回首页</van-button>
        </van-empty>
    </div>
</template>

<script>
import {Empty, Button} from 'vant'

export default {
    name: "Miss",
    components: {
        [Empty.name]: Empty,
        [Button.name]: Button
    },
    setup() {
        document.title = '404 - Not Found'
    }
}
</script>

<style scoped>
.empty {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
}

.empty-button {
    margin-top: 20px;
    width: 168px;
}
</style>
