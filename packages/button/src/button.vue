<template>
    <button
            :class="[UIName+'-button', UIName+'-button-' + type, UIName+'-button-' + size, {'is-disabled':disabled}]"
            :disabled="disabled"
            @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-button',
        mixins: [UIName],
        props: {
            type: {
                type: String,
                default: 'normal'
            },
            size: {
                type: String,
                default: 'large'
            },
            disabled: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/button";
</style>
