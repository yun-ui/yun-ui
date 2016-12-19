<template>
    <div :class="UIName+'-cell-item'" v-else="!multi">
        <div :class="UIName+'-cell-icon-left'" v-if="iconLeft || $slots.iconLeft">
            <slot name="iconLeft"></slot>
        </div>
        <div :class="[UIName+'-cell-title', UIName+'-ellipse']" v-if="title || $slots.title">
            <span v-text="title"></span>
        </div>
        <div :class="UIName+'-cell-secondary-text'" v-if="secondaryText || $slots.secondaryText">
            <span v-text="secondaryText"></span>
        </div>
        <div :class="[UIName+'-cell-icon-right']" v-if="iconRight || $slots.iconRight">
            <slot name="iconRight"></slot>
        </div>
        <div :class="UIName+'-cell-link'" v-if="link">
            <span class="iconfont icon-arrow-right"></span>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-cell-item',
        mixins: [UIName],
        props: {

        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
</style>
