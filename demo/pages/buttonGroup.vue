<template>
    <div>
        <div class="title">
            <h3>按钮组 ButtonGroup</h3>
            <p>我们提供常用的按钮以便统一体验。</p>
        </div>
        <div class="content">
            <h4>普通文本按钮</h4>
            <div class="row">
                <yun-button-group>
                    <yun-tab-item>文本</yun-tab-item>
                    <yun-tab-item>文本</yun-tab-item>
                    <yun-tab-item>文本</yun-tab-item>
                    <yun-tab-item>文本</yun-tab-item>
                </yun-button-group>
            </div>
            <h4>图标按钮</h4>
            <div class="row">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-demo"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i></yun-tab-item>
                </yun-button-group>
            </div>
            <h4>图标 + 文本按钮</h4>
            <div class="row">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                </yun-button-group>
            </div>
            <h4>按钮固定在底部&nbsp;&#8681;</h4>
            <yun-button-group fixed>
                <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
                <yun-tab-item><i class="iconfont icon-demo"></i>文本</yun-tab-item>
            </yun-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yun-button-group-demo',
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
