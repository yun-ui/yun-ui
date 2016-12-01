<template>
    <div>
        <div class="banner yun-bg-blue yun-text-white">
            <h1>YunUI</h1>
            <h6>YunUI为云之家轻应用使用的一套基础样式库，便于
                第三方开发以及统一用户体验。</h6>
        </div>
        <div v-for="group in nav">
            <yun-list-container>
                <yun-list-item :title="group.title.main" :secondaryText="group.title.secondary" multi>
                    <img :src="group.title.icon" slot="img">
                </yun-list-item>
                <yun-list-item v-for="component in group.list" :title="component.name" link
                               @click.native="goToDetail(component.path)">
                </yun-list-item>
            </yun-list-container>
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
    .banner{
        padding:0.6rem;
        h6{
            margin-top:0.2rem;
        }
    }
</style>
