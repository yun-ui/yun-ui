<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'yun-statePage-demo',
        props: {},
        created () {
            console.log('button demo loaded')
            this.$router.replace({
                path: '/statePage/index'
            })
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
