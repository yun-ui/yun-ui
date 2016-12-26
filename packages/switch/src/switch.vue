<template>
    <div :class="UIName+'-switch'">
        <input :class="UIName+'-switch-checkbox'" type="checkbox" />
        <div :class="[UIName+'-switch-inner']"></div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-switch',
        mixins: [UIName],
        props: {
        },
        methods: {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/switch";
</style>
