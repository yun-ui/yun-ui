<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">加载 Loading</h3>
            <p>YunUI 提供了两种页面加载过程中的提示效果。
                一种用于页面 <strong>刷新</strong> 类加载，
                一种用于需要响应较长时间的 <strong>跳转</strong> 类加载。</p>
        </div>
        <div class="content button-container">
            <yun-button type="linear" @click.native="showFresh = !showFresh">刷新类 Loading</yun-button>
            <yun-button type="linear" @click.native="showLoading = !showLoading">跳转类 Loading</yun-button>
        </div>

        <yun-loading content="加载中" refresh v-show="showFresh">
            <img src="../assets/loading.png" slot="icon"/>
        </yun-loading>
        <yun-loading content="加载中" v-show="showLoading">
            <img src="../assets/loading.png" slot="icon"/>
        </yun-loading>
    </div>
</template>

<script>
    export default {
        name: 'yun-loading-demo',
        props: {},
        data: function () {
            return {
                showFresh: false,
                showLoading: false
            }
        },
        created () {
            console.log('button demo loaded')
        },
        methods: {

        }
    }

</script>

<style lang="less">
    .is-loading-refresh{
        top: 64px;
    }
</style>
