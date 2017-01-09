<template>
    <div
            :class="[UIName+'-button-group', {'is-fixed':fixed}]"
            :fixed="fixed"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from 'mixins'

    export default {
        name: 'yun-button-group',
        mixins: [UIName],
        props: {
            fixed: Boolean,
            defaultActiveTabId: String
        },
        data () {
            return {
                activeId: this.defaultActiveTabId
            }
        },
        methods: {}
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/buttonGroup";
</style>
