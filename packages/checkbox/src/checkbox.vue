<template>
    <div :class="[UIName+'-form-item', UIName+'-checkbox-item', {'error': error}]">
        <div :class="UIName + '-checkbox'">
            <input :class="UIName + '-checkbox-input'" type="checkbox" :checked="checked" @change="change"/>
            <div :class="[UIName + '-checkbox-inner']"></div>
        </div>
        <div :class="UIName + '-form-title'">
            <span v-text="label"></span>
        </div>
    </div>
</template>

<script>
    if (process.env === 'production') {
        require('yun-ui/checkbox/index.css')
    }
    /**
     * @param checked {boolean} 初始是否勾选
     * @param value {string} 该复选框的值
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-checkbox',
        mixins: [UIName],
        props: {
            label: String,
            value: String,
            error: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            change: function (e) {
                this.$emit('change', e.target.checked, this.label)
                this.$parent && this.$parent.$emit('change', e.target.checked, this.label)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/checkbox";
</style>
