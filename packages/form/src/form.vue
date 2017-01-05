<template>
    <div :class="UIName+'-form'">
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-form',
        mixins: [UIName],
        props: {},
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/form";
</style>
