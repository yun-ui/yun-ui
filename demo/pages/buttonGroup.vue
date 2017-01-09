<template>
    <div style="padding-bottom:58px">
        <div class="title">
            <h3 class="yun-h3">按钮组 ButtonGroup</h3>
            <p>我们提供常用的按钮以便统一体验。</p>
        </div>
        <div class="content">
            <h4 class="yun-h4">普通文本按钮组</h4>
            <div class="row clearContentPadding">
                <yun-button-group>
                    <yun-tab-item title="文本"></yun-tab-item>
                    <yun-tab-item title="文本"></yun-tab-item>
                    <yun-tab-item title="文本"></yun-tab-item>
                    <yun-tab-item title="文本"></yun-tab-item>
                </yun-button-group>
            </div>
            <h4 class="yun-h4">图标按钮组</h4>
            <div class="row clearContentPadding">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                </yun-button-group>
            </div>
            <h4 class="yun-h4">图标 + 文本按钮组</h4>
            <div class="row clearContentPadding">
                <yun-button-group>
                    <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                </yun-button-group>
            </div>
            <h4>按钮组固定在底部<i class="iconfont icon-"></i></h4>
            <yun-button-group fixed>
                <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                <yun-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
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
