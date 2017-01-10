<template>
    <span :class="UIName+'-badge'">
        <sup :style="{ backgroundColor: color }"
             :class="UIName + '-badge-' + type" v-text="text"></sup>
    </span>
</template>

<script>
    if (process.env === 'production') {
        require('yun-ui/badge/index.css')
    }
    import {UIName} from 'mixins'
    export default {
        name: 'y-badge',
        mixins: [UIName],
        props: {
            type: {
                type: String,
                default: 'dot'
            },
            text: String,
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
