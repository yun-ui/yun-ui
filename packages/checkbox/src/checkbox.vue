<template>
    <div :class="UIName+'-checkbox'">
        <input :class="UIName+'-checkbox-input'" type="checkbox" />
        <div :class="[UIName+'-checkbox-inner']"></div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-checkbox',
        mixins: [UIName],
        props: {
        },
        methods: {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/checkbox";
</style>
