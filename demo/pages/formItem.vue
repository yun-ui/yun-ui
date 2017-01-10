<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">表单 Form</h3>
            <p>YunUI 提供一套用于表单输入的组件。其中包括常见的：
                <strong>本文输入、金额（数字）输入、多行文本输入、输入邮箱等。
                </strong></p>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <y-input label="单行输入框" placeholder="单行输入框"></y-input>
                    <y-textarea placeholder="多行输入框" :limit="20"></y-textarea>
                    <y-counter label="计数器"></y-counter>
                    <y-switch label="开关列表"></y-switch>
                    <div>
                        <y-checkbox label="复选框"></y-checkbox>
                        <y-checkbox label="复选框"></y-checkbox>
                        <y-checkbox label="复选框"></y-checkbox>
                    </div>
                    <div>
                        <y-radio label="单选框" name="radio"></y-radio>
                        <y-radio label="单选框" name="radio"></y-radio>
                        <y-radio label="单选框" name="radio"></y-radio>
                    </div>
                    <!--<yun-form-item type="imagePicker" label="照片选择器" text="已选择5张">-->
                    <!--<img src="../../src/assets/placeholder-figure.png" slot="image">-->
                    <!--</yun-form-item>-->
                    <!--<yun-form-item type="filePicker" label="选择附件" text="已选择2个" fileName="文件名称"-->
                    <!--errorInfo="错误信息" fileSize="9.2M/20M" uploadTime="12月25日 13:22 星期五">-->
                    <!--<img src="../../src/assets/placeholder-figure.png" slot="fileIcon">-->
                    <!--</yun-form-item>-->
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-form-demo'
    }

</script>

<style lang="less">
    .yun-form > div {
        margin-bottom: 8px;
    }
</style>
