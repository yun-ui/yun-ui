<template>
    <div
        :class="UIName+'-list-container'"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-list-container',
        mixins: [UIName],
        props: {
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/list";
</style>
