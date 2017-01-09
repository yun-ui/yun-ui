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
                <yun-form>
                    <yun-form-item type="input" label="单行输入框" placeholder="单行输入框"></yun-form-item>
                    <yun-form-item type="textarea" placeholder="多行输入框"></yun-form-item>
                    <yun-form-item type="counter" label="计数器"></yun-form-item>
                    <yun-form-item type="switch" label="开关列表"></yun-form-item>
                    <div>
                        <yun-form-item type="checkbox" label="复选框"></yun-form-item>
                        <yun-form-item type="checkbox" label="复选框"></yun-form-item>
                        <yun-form-item type="checkbox" label="复选框"></yun-form-item>
                    </div>
                    <div>
                        <yun-form-item type="radio" label="单选框" name="radio"></yun-form-item>
                        <yun-form-item type="radio" label="单选框" name="radio"></yun-form-item>
                        <yun-form-item type="radio" label="单选框" name="radio"></yun-form-item>
                    </div>
                    <!--<yun-form-item type="imagePicker" label="照片选择器" text="已选择5张">-->
                        <!--<img src="../../src/assets/placeholder-figure.png" slot="image">-->
                    <!--</yun-form-item>-->
                    <!--<yun-form-item type="filePicker" label="选择附件" text="已选择2个" fileName="文件名称"-->
                                   <!--errorInfo="错误信息" fileSize="9.2M/20M" uploadTime="12月25日 13:22 星期五">-->
                        <!--<img src="../../src/assets/placeholder-figure.png" slot="fileIcon">-->
                    <!--</yun-form-item>-->
                </yun-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yun-field-demo',
        props: {},
        created () {
            console.log('field demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">
    .yun-form > div {
        margin-bottom: 8px;
    }
</style>
