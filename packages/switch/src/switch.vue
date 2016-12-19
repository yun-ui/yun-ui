<template>
    <div :class="UIName+'-cell-container'"
    >
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-switch',
        mixins: [UIName],
        props: {
            checked: Boolean
        },
        methods: {
            handleClick (e) {
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/switch";
</style>
