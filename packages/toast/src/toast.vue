<template>
    <div :class="UIName+'-toast'" v-if="show">
        <div :class="[UIName+'-toast-container', {'is-loading-bottom': bottom}]">
            <div :class="UIName+'-toast-icon'" v-if="icon || $slots.icon">
                <slot name="icon"></slot>
            </div>
            <div :class="UIName+'-toast-content'"
                 v-text="content" v-if="content || $slots.content"></div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-toast',
        mixins: [UIName],
        props: {
            icon: String,
            bottom: Boolean,
            show: Boolean,
            content: String
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/toast";
</style>
