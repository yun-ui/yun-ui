<template>
    <div
        :class="[UIName+'-tabbar', {'is-fixed':fixed}]"
        :fixed="fixed"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-tabbar',
        mixins: [UIName],
        props: {
            fixed: Boolean,
            defaultActiveTabId: String
        },
        data () {
            return {
                activeId: this.defaultActiveTabId
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/tabbar";
</style>
