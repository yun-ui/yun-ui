<template>
    <button
        class="UIName-button"
        :class="[UIName+'-button-' + type, UIName+'-button-' + size, {'is-disabled':disabled}]"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-button',
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
    @import "../../style/stylesheets/base.css";
    @import "../../style/stylesheets/button.css";
</style>
