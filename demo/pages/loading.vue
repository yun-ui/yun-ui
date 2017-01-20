<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">加载 Loading</h3>
            <p>YunUI 提供了两种页面加载过程中的提示效果。
                一种用于页面 <strong>刷新</strong> 类加载，
                一种用于需要响应较长时间的 <strong>跳转</strong> 类加载。</p>
        </div>
        <div class="content button-container">
            <y-button type="linear" @click.native="showFresh = !showFresh">刷新类 Loading</y-button>
            <y-button type="linear" @click.native="showLoading = !showLoading">跳转类 Loading</y-button>
        </div>

        <y-loading content="加载中" refresh :show="showFresh" style="top:64px">
            <img src="../assets/loading.png" slot="icon"/>
        </y-loading>
        <y-loading content="加载中" :show="showLoading">
            <img src="../assets/loading.png" slot="icon"/>
        </y-loading>
    </div>
</template>

<script>
    export default {
        name: 'y-loading-demo',
        props: {},
        data: function () {
            return {
                showFresh: false,
                showLoading: false
            }
        }
    }

</script>

<style lang="less" scoped>
    .title{
        padding-top:60px;
    }
    .is-loading-refresh {
        top: 64px;
    }
</style>
