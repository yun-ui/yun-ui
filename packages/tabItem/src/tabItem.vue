<template>
    <button class="divided hidden-last-divided" :class="UIName+'-tab-item'">
        <div :class="[UIName+'-tab-item-label', {'is-active':active}]">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-tab-item',
        mixins: [UIName],
        props: {
            active: Boolean
        },
        data () {
            return {
                selected: false
            }
        },
        methods: {

        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
    @import "../../style/stylesheets/tabItem";
</style>
