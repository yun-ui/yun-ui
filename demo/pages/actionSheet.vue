<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">操作面板 ActionSheet</h3>
            <p>YunUI 提供一组底部弹出操作面板组件。</p>
        </div>
        <div class="content button-container">
            <yun-button type="linear">面板型</yun-button>
            <yun-button type="linear">列表型</yun-button>
            <yun-button type="linear">选项型</yun-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yun-button-demo',
        props: {},
        created () {
            console.log('action sheet demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
