<template>
    <yun-tabbar>
        <yun-tab-item><i class="iconfont icon-sina"></i>tabitem1</yun-tab-item>
        <yun-tab-item><i class="iconfont icon-tongshiquan"></i>tabitem2</yun-tab-item>
        <yun-tab-item><i class="iconfont icon-pengyouquan"></i>tabitem3</yun-tab-item>
        <yun-tab-item><i class="iconfont icon-qq"></i>tabitem4</yun-tab-item>
    </yun-tabbar>
</template>

<script>
    export default {
        name: 'yun-tabbar-demo',
        props: {},
        created () {
            console.log('tabbar demo loaded')
        },
        methods: {}
    }

</script>

<style lang="css">

</style>
