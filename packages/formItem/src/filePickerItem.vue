<template>
    <div>
        <div :class="[UIName+'-form-item', UIName+'-filePicker-item']">
            <div :class="UIName + '-form-title'">
                <span v-text="label"></span>
                <small :class="UIName+ '-form-secondary'" v-text="text"></small>
            </div>
            <div :class="UIName+'-icon-container'">
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
        name: 'yun-file-picker-item',
        mixins: [UIName],
        props: {
            label: String,
            fileName: String,
            errorInfo: String,
            fileSize: String,
            uploadTime: String,
            fileIcon: String
        },
        methods: {}
    }

</script>
