<template>
    <div :class="UIName+'-loading'">
        <div :class="[UIName+'-loading-container', {'is-loading-refresh': refresh}]">
            <div :class="UIName+'-loading-icon'">
                <slot name="icon"></slot>
            </div>
            <div :class="UIName+'-loading-content'"
                 v-text="content" v-if="content || $slots.content"></div>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-loading',
        mixins: [UIName],
        props: {
            icon: String,
            refresh: Boolean,
            content: String
        },
        methods: {}
    }
</script>

<style lang="less">
    @import "../../style/stylesheets/loading";
</style>