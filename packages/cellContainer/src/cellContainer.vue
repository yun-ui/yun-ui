<template>
    <div
        :class="UIName+'-cell-container'"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-cell-container',
        mixins: [UIName],
        props: {
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/cell";
</style>
