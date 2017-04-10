<template>
    <div>
        <div v-for="checkbox in checkboxList" :class="[UIName+'-form-item', UIName+'-checkbox-item', {'error': checkbox.error}]">
            <div :class="UIName + '-checkbox'">
                <input :class="UIName + '-checkbox-input'" type="checkbox" :value="checkbox.value"
                       @change="change($event,checkbox)" v-model="checkedItems"/>
                <div :class="[UIName + '-checkbox-inner']"></div>
            </div>
            <div :class="UIName + '-form-title'">
                <span v-text="checkbox.label"></span>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @param checked {boolean} 初始是否勾选
     * @param value {string} 该复选框的值
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-checkbox',
        mixins: [UIName],
        data () {
            return {
                checkedItems: this.value || []
            }
        },
        props: {
            checkboxList: Array,
            value: {
                type: Array
            }
        },
        methods: {
            change: function (e, checkbox) {
                this.$emit('input', this.checkedItems)
                this.$emit('change', e.target.checked, checkbox.value || checkbox.label, checkbox.label)
                this.$parent && this.$parent.$emit('change', e.target.checked, checkbox.value || checkbox.label, checkbox.label)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/checkbox";
</style>
