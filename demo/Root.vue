<template>
    <div id="app">
        <div class="demo-header">
            <router-link to="/">
                <span class="iconfont icon-arrow-left"></span>
            </router-link>
            YunUI
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created () {
            if (window.parent !== window) {
                window.parent.postMessage({
                    ready: true
                }, window.location.origin)
            }
        }
    }
</script>