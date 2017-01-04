<template>
    <div>
        <yun-input-item
                v-if="type == 'input'" :label="label" :placeholder="placeholder"
        ></yun-input-item>

        <yun-textarea-item
                v-if="type == 'textarea'" :placeholder="placeholder"
        ></yun-textarea-item>

        <yun-counter-item
                v-if="type == 'counter'" :label="label"
        ></yun-counter-item>

        <yun-switch-item
                v-if="type == 'switch'" :label="label"
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
            fileIcon: String
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
