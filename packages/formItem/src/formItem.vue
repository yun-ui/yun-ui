<template>
    <div>
        <yun-input-item
                v-if="type == 'input'" :label="label" :placeholder="placeholder"
        ></yun-input-item>

        <yun-textarea-item
                v-if="type == 'textarea'" :placeholder="placeholder"
        ></yun-textarea-item>

        <yun-counter-item
                v-if="type == 'counter'" :label="label" :min="min" :max="max" :value="value" :step="step"
        ></yun-counter-item>

        <yun-switch-item
                v-if="type == 'switch'" :label="label" :checked="checked"
        ></yun-switch-item>

        <yun-checkbox-item
                v-if="type == 'checkbox'" :label="label"
        ></yun-checkbox-item>

        <yun-radio-item
                v-if="type == 'radio'" :label="label"
        ></yun-radio-item>

        <yun-image-picker-item
                v-if="type == 'imagePicker'" :label="label" :text="text" :image="image"
        ></yun-image-picker-item>

        <yun-file-picker-item
                v-if="type == 'filePicker'" :label="label" :text="text" :fileName="fileName" :errorInfo="errorInfo"
                :fileSize="fileSize" :uploadTime="uploadTime" :fileIcon="fileIcon"
        ></yun-file-picker-item>
    </div>
</template>

<script>
    /**
     * @param type {string} 使用的表单类型
     * @type input {string} 单行输入框
     * @type textarea {string} 多行输入框
     * @type counter {string} 计数器
     * @type switch {string} 开关
     * @type checkbox {string} 多选框
     * @type radio {string} 单选框
     * @type imagePicker {string} 图片选择器
     * @type filePicker {string} 文件选择器
     * @param label {string} 显示的表单名称
     * @param min {number} 计数器可达到的最小值，默认为负无穷大
     * @param max {number} 计数器可达到的最大值，默认为正无穷大
     * @param value {number} 计数器初始值，默认为0
     * @param step {number} 计数器一次加减变化的值，默认为1
     * @param checked {boolean} 开关初始的状态
     * @function change {function} 表单项操作后的回调方法，输出结果为操作后的锚点值
     */
    import yunInputItem from './inputItem.vue'
    import yunCheckboxItem from './checkboxItem.vue'
    import yunCounterItem from './counterItem.vue'
    import yunFilePickerItem from './filePickerItem.vue'
    import yunImagePickerItem from './imagePickerItem.vue'
    import yunRadioItem from './radioItem.vue'
    import yunSwitchItem from './switchItem.vue'
    import yunTextareaItem from './textareaItem.vue'

    import {UIName} from 'mixins'
    export default {
        name: 'yun-form-item',
        mixins: [UIName],
        props: {
            label: String,
            text: String,
            type: String,
            placeholder: String,
            image: String,
            fileName: String,
            errorInfo: String,
            fileSize: String,
            uploadTime: String,
            fileIcon: String,
            min: Number,
            max: Number,
            value: Number,
            step: Number,
            checked: Boolean
        },
        methods: {},
        components: {
            yunInputItem,
            yunCheckboxItem,
            yunCounterItem,
            yunFilePickerItem,
            yunImagePickerItem,
            yunRadioItem,
            yunSwitchItem,
            yunTextareaItem
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
</style>
