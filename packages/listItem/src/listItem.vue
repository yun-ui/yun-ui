<template>
    <div :class="UIName+'-list-item-multi'" v-if="multi">
        <div :class="[UIName+'-list-img', {'is-avatar': avatar}]" v-if="img || $slots.img">
            <img :src="img">
        </div>
        <div :class="UIName+'-list-content'">
            <div :class="[UIName+'-list-title', UIName+'-aline-ellipse']" v-if="title || $slots.title">
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

    <div :class="UIName+'-list-item-aline'" v-else="!multi">
        <div :class="UIName+'-list-icon'" v-if="icon || $slots.icon">
            <img :src="icon">
        </div>
        <div :class="[UIName+'-list-title', UIName+'-aline-ellipse']" v-if="title || $slots.title">
            <span v-text="title"></span>
        </div>
        <div :class="UIName+'-list-secondary-text'" v-if="secondaryText || $slots.secondaryText">
            <span v-text="secondaryText"></span>
        </div>
        <div :class="[UIName+'-list-icon-right']" v-if="iconRight || $slots.iconRight">
            <img :src="iconRight">
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
            multi: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
</style>
