<template>
    <div :class="UIName + '-checkbox'">
        <input :class="UIName + '-checkbox-input'" type="checkbox" :checked="checked" @change="change"/>
        <div :class="[UIName + '-checkbox-inner']"></div>
    </div>
</template>

<script>
    /**
     * @param checked {boolean} 初始是否勾选
     * @param value {string} 该复选框的值
     */
    import {UIName} from 'mixins'
    export default {
        name: 'yun-checkbox',
        mixins: [UIName],
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            value: String
        },
        methods: {
            change: function (e) {
                this.$emit('change', this.value, e.target.checked)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/checkbox";
</style>
