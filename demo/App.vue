<template>
    <div>
        <router-link :to="{name: 'Button'}">
          <button>首页</button>
        </router-link>
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
