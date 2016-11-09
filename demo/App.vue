<template>
    <div>
        <button>首页</button>
        <yun-toast></yun-toast>
        <yun-button></yun-button>
    </div>
</template>

<script>
    import nav from './route'

    export default {
        name: 'yun-ui-demo',
        props: {},
        created () {
            console.info(nav)
        },
        methods: {},
        components: {
        }
    }

</script>

<style lang="css">

</style>
