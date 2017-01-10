<template>
    <div :class="UIName+'-form'">
        <slot></slot>
    </div>
</template>

<script>
    if (process.env === 'production') {
        require('yun-ui/form/index.css')
    }
    /**
     * 对于表单组件：y-checkbox,y-counter,y-input,y-radio,y-switch,y-textarea
     * @param type {string} 使用的表单类型
     * @type input {string} 单行输入框
     * @type textarea {string} 多行输入框
     * @type counter {string} 计数器
     * @type switch {string} 开关
     * @type checkbox {string} 多选框
     * @type radio {string} 单选框
     * @type name {string} 选择框所属的选择群组名
     * @param label {string} 显示的表单名称
     * @param min {number} 计数器可达到的最小值，默认为负无穷大
     * @param max {number} 计数器可达到的最大值，默认为正无穷大
     * @param limit {number} 多行输入框限制最大字数，默认为空
     * @param counterValue {number} 计数器初始值，默认为0
     * @param value {string} 多选框、单选框的值
     * @param error {boolean} 表单输入验证错误提示
     * @param step {number} 计数器一次加减变化的值，默认为1
     * @param checked {boolean} 开关/复选框/单选框初始的状态
     * @function change {function} 表单项操作后的回调方法，输出结果为操作后的锚点值
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-form',
        mixins: [UIName],
        props: {},
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/form";
</style>
