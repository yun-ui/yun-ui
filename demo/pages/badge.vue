<template>
    <div class="badge-page yun-bg-white">
        <div class="title">
            <h3>徽章 Badge</h3>
            <p>YunUI 提供一套简介的统一标记样式，用于标注状态，提醒。
                我们还支持用户自定义颜色（这里推荐使用官方配色）。
        </div>
        <div class="content">
            <div class="row text-center">
                <yun-badge type="text" number="new"></yun-badge>
                <yun-badge type="text" number="100" color="#3CBAFF"></yun-badge>
                <yun-badge type="text" number="100" color="#94D301"></yun-badge>
                <yun-badge type="text" number="100" color="#F87E4E"></yun-badge>
                <yun-badge type="text" number="100" color="#F7BF28"></yun-badge>
                <yun-badge type="text" number="100" color="#AF65DF"></yun-badge>
                <yun-badge type="text" number="100" color="#FB6691"></yun-badge>
                <yun-badge type="text" number="100" color="#F35959"></yun-badge>
                <yun-badge type="text" number="100" color="#31D2EA"></yun-badge>
                <yun-badge type="text" number="100" color="#4788D8"></yun-badge>
                <yun-badge type="text" number="100" color="#01D386"></yun-badge>
                <yun-badge type="text" number="100" color="#C18E6F"></yun-badge>
                <yun-badge type="text" number="100" color="#6D777D"></yun-badge>
                <yun-badge type="text" number="100" color="#EAEFF3"></yun-badge>
                <yun-badge type="text" number="1"></yun-badge>
            </div>
            <div class="row text-center">
                <yun-badge></yun-badge>
                <yun-badge color="#3CBAFF"></yun-badge>
                <yun-badge color="#94D301"></yun-badge>
                <yun-badge color="#F87E4E"></yun-badge>
                <yun-badge color="#F7BF28"></yun-badge>
                <yun-badge color="#AF65DF"></yun-badge>
                <yun-badge color="#FB6691"></yun-badge>
                <yun-badge color="#F35959"></yun-badge>
                <yun-badge color="#31D2EA"></yun-badge>
                <yun-badge color="#4788D8"></yun-badge>
                <yun-badge color="#01D386"></yun-badge>
                <yun-badge color="#C18E6F"></yun-badge>
                <yun-badge color="#6D777D"></yun-badge>
                <yun-badge color="#EAEFF3"></yun-badge>
            </div>
            <div class="row clearContentPadding">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本<yun-badge></yun-badge></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                </yun-button-group>
            </div>
            <div class="row clearContentPadding">
                <yun-button-group>
                    <yun-tab-item>文本
                        <yun-badge type="text" number="100" color="#F7BF28"></yun-badge>
                    </yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                </yun-button-group>
            </div>
            <div class="row clearContentPadding">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本<yun-badge color="#01D386"></yun-badge></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                </yun-button-group>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {},
        created () {
        },
        methods: {}
    }

</script>

<style lang="less">
    .badge-page{
        min-height: 100%;
    }
</style>
