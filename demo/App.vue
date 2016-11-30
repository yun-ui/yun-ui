<template>
    <div>
        <div v-for="group in nav">
            <yun-list-container>
                <yun-list-item :title="group.title.main" :secondaryText="group.title.secondary" multi
                               img="../src/assets/placeholder-figure.png">
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

<style lang="css">

</style>
