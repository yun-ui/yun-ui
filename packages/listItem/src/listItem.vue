<template>
    <div :class="UIName+'-list-item-multi'" v-if="multi">
        <div :class="[UIName+'-list-img', {'is-avatar': avatar}]" v-if="img || $slots.img">
            <slot name="img"></slot>
        </div>
        <div :class="UIName+'-list-content'">
            <div :class="[UIName+'-list-title', UIName+'-ellipse']" v-if="title || $slots.title">
                <span v-text="title"></span>
            </div>
            <div :class="UIName+'-list-secondary-text'" v-if="secondaryText || $slots.secondaryText">
                <span v-text="secondaryText"></span>
            </div>
        </div>
        <div :class="UIName+'-list-link'" v-if="link">
            <span class="iconfont icon-arrow-right"></span>
        </div>
    </div>

    <div :class="UIName+'-list-item-single'" v-else="!multi">
        <div :class="UIName+'-list-icon'" v-if="icon || $slots.icon">
            <slot name="icon"></slot>
        </div>
        <div :class="[UIName+'-list-title', UIName+'-ellipse']" v-if="title || $slots.title">
            <span v-text="title"></span>
        </div>
        <div :class="UIName+'-list-secondary-text'" v-if="secondaryText || $slots.secondaryText">
            <span v-text="secondaryText"></span>
        </div>
        <div :class="[UIName+'-list-icon-right']" v-if="iconRight || $slots.iconRight">
            <slot name="iconRight"></slot>
        </div>
        <div :class="UIName+'-list-link'" v-if="link">
            <span class="iconfont icon-arrow-right"></span>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-list-item',
        mixins: [UIName],
        props: {
            icon: String,
            iconRight: String,
            title: String,
            secondaryText: String,
            link: Boolean,
            multi: Boolean,
            img: String,
            avatar: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
</style>
