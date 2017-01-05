<template>
    <div :class="UIName+'-switch'">
        <input :class="UIName+'-switch-checkbox'" type="checkbox" :checked="checked" @change="change"/>
        <div :class="[UIName+'-switch-inner']"></div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-switch',
        mixins: [UIName],
        props: {
            checked: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            change: function (e) {
                this.$emit('change', e.target.checked)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/switch";
</style>
