<template>
    <span :class="UIName+'-badge'">
        <sup :style="{ backgroundColor: color }"
             :class="UIName + '-badge-' + type" v-text="number"></sup>
    </span>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-badge',
        mixins: [UIName],
        props: {
            type: {
                type: String,
                default: 'dot'
            },
            number: String,
            color: String
        },
        methods: {
            handleClick (e) {
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/badge";
</style>
