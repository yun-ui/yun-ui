<template>
    <yun-navbar fixed>
        <yun-tab-item active>tabitem1</yun-tab-item>
        <yun-tab-item>tabitem2</yun-tab-item>
    </yun-navbar>
</template>

<script>
    export default {
        name: 'yun-navbar-demo',
        props: {},
        created () {
            console.log('navbar demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
