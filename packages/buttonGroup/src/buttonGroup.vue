<template>
    <div
        :class="[UIName+'-button-group', {'is-fixed':fixed}]"
        :fixed="fixed"
    >
        <slot></slot>
    </div>
</template>

<script>
    // TODO 按钮的active状态
    import {UIName} from '../../../src/mixins/'

    export default {
        name: 'yun-button-group',
        mixins: [UIName],
        props: {
            fixed: Boolean
        },
        methods: {}
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/buttonGroup";
</style>
