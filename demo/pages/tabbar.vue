<template>
    <yun-tabbar @change="tabChange" defaultActiveTabId="2">
        <yun-tab-item title="文本" tabId="1"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
        <yun-tab-item title="文本" tabId="2"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
        <yun-tab-item title="文本" tabId="3"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
        <yun-tab-item title="文本" tabId="4"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    </yun-tabbar>
</template>

<script>
    export default {
        name: 'yun-tabbar-demo',
        props: {},
        created () {
            console.log('tabbar demo loaded')
        },
        methods: {
            tabChange: function (tabId) {
                console.log(tabId)
            }
        }
    }

</script>

<style lang="css">

</style>
