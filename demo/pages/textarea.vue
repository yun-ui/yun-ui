<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">多行输入框 Textarea</h3>
            <p>YunUI提供统一的多行输入框，可以满足无字数限制及有字数限制场景</p>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <y-textarea placeholder="多行文本"></y-textarea>
                </y-form>
            </div>
            <div class="row clearContentPadding">
                <y-form>
                    <y-textarea placeholder="多行限制字数文本" :limit="10"></y-textarea>
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-textarea-demo',
        props: {},
        created () {
            console.log('textarea demo loaded')
            // setTimeout(() => {
            //     this.defaultValue = '动态改变初始值'
            // }, 1000)
        },
        methods: {}
    }

</script>

<style lang="less" scoped>
    .row{
        padding:0 0 8px !important;
        margin-bottom:0;
    }
</style>
