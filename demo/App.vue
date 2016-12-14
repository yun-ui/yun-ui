<template>
    <div>
        <div class="banner yun-bg-blue yun-text-white">
            <h1>YunUI</h1>
            <p>YunUI为云之家轻应用使用的一套基础样式库，便于
                第三方开发以及统一用户体验。</p>
        </div>
        <div v-for="group in nav">
            <yun-cell-container>
                <yun-cell-item :title="group.title.main" :secondaryText="group.title.secondary" multi>
                    <img :src="group.title.icon" slot="icon">
                </yun-cell-item>
                <yun-cell-item v-for="component in group.list" :title="component.name"
                               :secondaryText="component.secondary" link
                               @click.native="goToDetail(component.path)">
                </yun-cell-item>
            </yun-cell-container>
        </div>
    </div>
</template>

<script>
    import route from './route'

    export default {
        name: 'yun-ui-demo',
        props: {},
        data () {
            return {
                nav: []
            }
        },
        created () {
            this.nav = route.nav
        },
        methods: {
            goToDetail: function (path) {
                this.$router.push({
                    path: path
                })
            }
        },
        components: {}
    }

</script>

<style lang="less">

</style>
