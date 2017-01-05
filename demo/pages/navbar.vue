<template>
    <yun-navbar fixed @change="navChange" defaultActiveTabId="2">
        <yun-tab-item title="文本" tabId="1"></yun-tab-item>
        <yun-tab-item title="文本" tabId="2"></yun-tab-item>
    </yun-navbar>
</template>

<script>
    export default {
        name: 'yun-navbar-demo',
        props: {},
        created () {
            console.log('navbar demo loaded')
        },
        methods: {
            navChange: function (tabId) {
                console.log(tabId)
            }
        }
    }

</script>

<style lang="less">

</style>
