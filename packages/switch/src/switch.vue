<template>
    <div :class="[UIName+'-form-item', UIName+'-switch-item', {'error': error}]">
        <div :class="UIName + '-form-title'">
            <span v-text="label"></span>
        </div>
        <div :class="UIName+'-switch'">
            <input :class="UIName+'-switch-checkbox'" type="checkbox" :checked="checked" @change="change"/>
            <div :class="[UIName+'-switch-inner']"></div>
        </div>
    </div>
</template>

<script>
    /**
     * @param label {string} 显示的表单名称
     * @param checked {boolean} 开关初始的状态
     * @function change {function} 切换开关后的回调，输出切换后的开关boolean值
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-switch',
        mixins: [UIName],
        props: {
            label: String,
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
    @import "../../style/stylesheets/switch";
</style>
