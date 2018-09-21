<template>
    <div v-if="multi">
        <div :class="[UIName+'-list-item',UIName+'-list-item-multi']">
            <div :class="[UIName+'-list-img', {'is-avatar': avatar}]" v-if="img || $slots.img">
                <slot name="img"></slot>
            </div>
            <div :class="[UIName+'-list-icon', {'is-avatar': avatar}]" v-if="icon || $slots.icon">
                <slot name="icon"></slot>
            </div>
            <div :class="UIName+'-list-content'">
                <div :class="[UIName+'-list-title', UIName+'-ellipse']" v-if="title || $slots.title">
                    <div v-text="title"></div>
                    <div :class="UIName+'-list-secondary-text'" v-if="secondaryText || $slots.secondaryText">
                        <span v-text="secondaryText"></span>
                    </div>
                </div>
            </div>
            <div :class="UIName+'-list-link'" v-if="link">
                <span class="iconfont icon-arrow-right"></span>
            </div>
        </div>
        <div :class="UIName+'-list-assist-column'" v-if="assist">
            <span v-text="assist"></span>
        </div>
    </div>

    <div :class="[UIName + '-list-add-item']" :style="itemStyle" v-else-if="add">
          <i class="iconfont icon-add"></i>
          <span v-text="title"></span>
    </div>
    
    <div :class="[UIName + '-list-muiti-items']" v-else-if="items">
          <div v-for="(item, index) in items">
              <span v-text="item"></span>
          </div>
    </div>

    <div :class="UIName+'-list-item'" v-else>
        <div :class="UIName+'-list-icon-left'" v-if="iconLeft || $slots.iconLeft">
            <slot name="iconLeft"></slot>
        </div>
        <div :class="[UIName+'-list-title', UIName+'-ellipse', {'first-title-fontsize': first}]" v-if="title || $slots.title">
            <span v-text="title"></span>
        </div>
        <div :class="UIName+'-list-secondary-text'" v-if="secondaryText || $slots.secondaryText">
            <span v-text="secondaryText" :style="itemStyle" @click="operate"></span>
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
    import {UIName} from 'mixins'
    export default {
        name: 'y-list-item',
        mixins: [UIName],
        props: {
            title: String,
            secondaryText: String,
            first: Boolean,
            link: Boolean,
            multi: Boolean,
            avatar: Boolean,
            assist: String,
            add: Boolean,
            iconLeft: String,
            iconRight: String,
            img: String,
            icon: String,
            itemStyle: Object,
            items: Array
        },
        methods: {
            operate () {
                this.$emit('operate')
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less" scoped>
     @import "../../style/stylesheets/list";
</style>
