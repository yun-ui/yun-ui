<template>
    <div :class="UIName+'-file-picker'">
        <div :class="[UIName+'-file-picker-title']">
            <label :class="UIName+'-file-picker-label'" v-text="label"></label>
            <small :class="UIName+ '-file-picker-secondary'" v-text="text"></small>
            <div :class="UIName+'-file-picker-add'">
                <i class="iconfont icon-add-field"></i>
            </div>
        </div>
        <!--TODO repeat文件-->
        <div :class="UIName+'-file-container'">
            <div :class="UIName+'-file-item'">
                <!--TODO 文件对应展示图标-->
                <div :class="UIName+'-file-icon'">
                    <slot name="fileIcon"></slot>
                </div>
                <!--TODO 文件信息状态，上传交互-->
                <div :class="UIName+'-file-content'">
                    <div :class="UIName+'-file-name'" v-text="fileName"></div>
                    <span :class="UIName+'-file-error'" v-text="errorInfo"></span>
                    <small :class="UIName+'-file-size'" v-text="fileSize"></small>
                </div>
                <!--TODO 删除当前文件-->
                <div :class="UIName+'-file-delete'">
                    <span class="iconfont icon-close"></span>
                </div>
            </div>
        </div>
        <div :class="UIName+'-upload-time'" v-text="uploadTime"></div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-file-picker',
        mixins: [UIName],
        props: {
            label: String,
            text: String,
            fileName: String,
            errorInfo: String,
            fileSize: String,
            uploadTime: String,
            fileIcon: String
        },
        methods: {}
    }

</script>

<style lang="less">
    @import "../../style/stylesheets/filePicker";
</style>