<template>
    <div>
        <div class="title">
            <h3>提示 Toast</h3>
            <p>YunUI 提供了两种提示样式，一种是位于中间的 <strong>图文提示</strong>，
                一种是位于 <strong>底部</strong> 的文字提示。</p>
        </div>
        <div class="content button-container">
            <yun-button type="linear" @click.native="showToast = !showToast">图文提示</yun-button>
            <yun-button type="linear" @click.native="showToastBottom = !showToastBottom">底部提示</yun-button>
        </div>

        <yun-toast content="操作成功" v-show="showToast">
            <img src="../assets/success.png" slot="icon" />
        </yun-toast>
        <yun-toast content="操作成功" bottom v-show="showToastBottom"></yun-toast>
    </div>
</template>

<script>
    export default {
        name: 'yun-toast-demo',
        props: {},
        data: function () {
            return {
                showToast: false,
                showToastBottom: false
            }
        },
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
