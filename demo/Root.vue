<template>
    <div id="app">
        <div class="demo-header" v-if="!isInCloudhub">
            <a @click="navClick">
                <span class="iconfont icon-arrow-left"></span>
            </a>
            YunUI
        </div>
        <router-view :class="['page',{'in-cloudhub': isInCloudhub}]"></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isInCloudhub: /Qing/gi.test(window.navigator.userAgent)
            }
        },
        created () {
            if (window.parent !== window) {
                window.parent.postMessage({
                    ready: true
                }, window.location.origin)
            }
        },
        methods: {
            navClick () {
                if (this.$route.path !== '/') {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>