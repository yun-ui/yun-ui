<template>
    <div
        :class="[UIName+'-alert']"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-alert',
        mixins: [UIName],
        props: {
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
    @import "../../style/stylesheets/alert";
</style>
