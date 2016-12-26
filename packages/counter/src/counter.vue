<template>
    <div :class="UIName+'-counter'">
        <span :class="[UIName+'-counter-icon' ,'iconfont' ,'icon-delete-block']"></span>
        <span :class="UIName+'-counter-number'">1234</span>
        <span :class="[UIName+'-counter-icon','iconfont', 'icon-add-block']"></span>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-counter',
        mixins: [UIName],
        props: {
        },
        methods: {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/counter";
</style>
