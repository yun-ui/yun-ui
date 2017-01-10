<template>
    <div :class="[UIName+'-loading', {'is-loading-refresh': refresh}]" v-if="show">
        <div :class="UIName+'-loading-icon'">
            <slot name="icon"></slot>
        </div>
        <div :class="UIName+'-loading-content'"
             v-text="content" v-if="content || $slots.content">
        </div>
    </div>
</template>

<script>
    if (process.env === 'production') {
        require('yun-ui/loading/index.css')
    }
    import {UIName} from 'mixins'
    export default {
        name: 'y-loading',
        mixins: [UIName],
        props: {
            icon: String,
            refresh: Boolean,
            show: Boolean,
            content: String
        }
    }
</script>

<style lang="less">
    @import "../../style/stylesheets/loading";
</style>