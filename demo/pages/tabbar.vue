<template>
    <yun-tabbar>
        <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
        <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
        <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
        <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
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
