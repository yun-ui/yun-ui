<template>
    <div :class="UIName+'-list-item-multi'">
        <div :class="[UIName+'-list-img', {'is-avatar':avatar}]" v-if="img|| $slots.img">
            <slot name="img"></slot>
        </div>
        <div :class="UIName+'-list-content'">
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
        name: 'yun-list-item-multi',
        mixins: [UIName],
        props: {
            img: String,
            title: String,
            secondaryText: String,
            link: Boolean,
            avatar: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
</style>
