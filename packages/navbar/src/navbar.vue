<template>
    <div :class="[UIName+'-navbar', {'is-fixed': fixed}]" :fixed="fixed">
        <slot></slot>
    </div>
</template>

<script>
    // TODO 优化传入参数配置项
    // TODO active状态还没做
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-navbar',
        mixins: [UIName],
        props: {
            fixed: Boolean
        },
        methods: {},
        events: {
            input (data) {
                console.log(data)
            }
        },
        created () {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/navbar";
</style>
