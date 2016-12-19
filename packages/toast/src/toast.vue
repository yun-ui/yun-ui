<template>
    <div :class="UIName+'-toast'">
        <div :class="[UIName+'-toast-container', {'is-loading-bottom': bottom}]">
            <div :class="UIName+'-toast-icon'"  v-if="icon || $slots.icon">
                <slot name="icon"></slot>
            </div>
            <div :class="UIName+'-toast-content'"
                 v-text="content" v-if="content || $slots.content"></div>
        </div>
    </div>
</template>

<script>
    // TODO 提示的显隐交互
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-toast',
        mixins: [UIName],
        props: {
            icon: String,
            bottom: Boolean,
            content: String
        },
        methods: {}
    }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/stylesheets/toast";
</style>
