<template>
    <div
        :class="[UIName+'-tabbar', {'is-fixed':fixed}]"
        :fixed="fixed"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-tabbar',
        mixins: [UIName],
        props: {
            fixed: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/tabbar";
</style>
