<template>
    <y-navbar fixed @change="navChange" defaultActiveTabId="2">
        <y-tab-item title="文本" tabId="1"></y-tab-item>
        <y-tab-item title="文本" tabId="2"></y-tab-item>
    </y-navbar>
</template>

<script>
    export default {
        name: 'y-navbar-demo',
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
