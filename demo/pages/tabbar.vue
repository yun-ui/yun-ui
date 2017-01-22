<template>
    <div>
        <y-tabbar @change="tabChange" defaultActiveTabId="2">
            <y-tab-item title="文本" tabId="1"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
            <y-tab-item title="文本" tabId="2"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
            <y-tab-item title="文本" tabId="3"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
            <y-tab-item title="文本" tabId="4"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
        </y-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'y-tabbar-demo',
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

<style lang="css" scoped>

</style>
