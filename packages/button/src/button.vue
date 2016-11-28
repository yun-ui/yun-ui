<template>
    <button
        :class="[UIName+'-button', UIName+'-button-' + type, UIName+'-button-' + size, {'is-disabled':disabled}]"
        :disabled="disabled"
        @click="handleClick"
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
        methods: {
            handleClick (e) {
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
    @import "../../style/stylesheets/button";
</style>
