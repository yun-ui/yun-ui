<template>
    <button :class="[UIName+'-tab-item',UIName+'-divided', 'hidden-last-divided']">
        <div :class="[UIName+'-tab-item-label', {'is-active':active}]">
            <slot name="icon"></slot>
            <span v-text="title"></span>
        </div>
    </button>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-tab-item',
        mixins: [UIName],
        props: {
            active: Boolean,
            title: String,
            icon: String
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
    @import "../../style/stylesheets/tabItem";
</style>
