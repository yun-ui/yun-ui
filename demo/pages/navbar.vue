<template>
    <yun-navbar fixed>
        <yun-tab-item title="文本" active></yun-tab-item>
        <yun-tab-item title="文本"></yun-tab-item>
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
