<template>
    <button :class="[UIName+'-tab-item',UIName+'-divided', 'hidden-last-divided']" @click="handleClick">
        <div :class="[UIName+'-tab-item-label',
        { 'is-active' : ($parent.activeId || $parent.activeId ==='0') && ($parent.activeId === tabId) }]">
            <slot name="icon"></slot>
            <span v-text="title"></span>
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-tab-item',
        mixins: [UIName],
        props: {
            title: String,
            icon: String,
            tabId: String
        },
        methods: {
            handleClick () {
                this.$emit('click')
                this.$parent.$emit('change', this.tabId)
                this.$parent.activeId = this.tabId
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/tabItem";
</style>
