<template>
    <div :class="UIName+'-list-item-aline'">
        <div :class="UIName+'-list-icon'" v-if="icon|| $slots.icon">
            <slot name="icon"></slot>
        </div>
        <div :class="[UIName+'-list-title', UIName+'-aline-ellipse']" v-if="title|| $slots.title">
            <slot name="title">
                <span v-text="title"></span>
            </slot>
        </div>
        <div :class="UIName+'-list-secondary-text'" v-if="secondaryText|| $slots.secondaryText">
            <slot name="secondaryText">
                <span v-text="secondaryText"></span>
            </slot>
        </div>
        <div :class="[UIName+'-list-icon-right']"
             v-if="iconRight|| $slots.iconRight">
            <slot name="iconRight">
            </slot>
        </div>
        <div :class="UIName+'-list-link'"
             v-if="link">
            <span class="iconfont icon-arrow-right"></span>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-list-item-aline',
        mixins: [UIName],
        props: {
            icon: String,
            iconRight: String,
            title: String,
            secondaryText: String,
            link: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
</style>
