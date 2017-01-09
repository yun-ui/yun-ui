<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">提示 Toast</h3>
            <p>YunUI 提供了两种提示样式，一种是位于中间的 <strong>图文提示</strong>，
                一种是位于 <strong>底部</strong> 的文字提示。</p>
        </div>
        <div class="content button-container">
            <yun-button type="linear" @click="showToast">图文提示</yun-button>
            <yun-button type="linear" @click="showToastBottom">底部提示</yun-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yun-toast-demo',
        props: {},
        data: function () {
            return {}
        },
        created () {
            console.log('button demo loaded')
        },
        methods: {
            showToast: function () {
                this.$toast({
                    content: '操作成功',
                    type: 'success' || 'failed'
                })
            },
            showToastBottom: function () {
                this.$toast({
                    content: '操作成功',
                    bottom: true
                })
            }
        }
    }

</script>

<style lang="less">

</style>
