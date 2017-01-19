<template>
    <div style="padding-bottom:58px">
        <div class="title">
            <h3 class="yun-h3">按钮组 ButtonGroup</h3>
            <p>我们提供常用的按钮以便统一体验。</p>
        </div>
        <div class="content">
            <h4 class="yun-h4">普通文本按钮组</h4>
            <div class="row clearContentPadding">
                <y-button-group defaultActiveTabId="2">
                    <y-tab-item title="文本" tabId="1"></y-tab-item>
                    <y-tab-item title="文本" tabId="2"></y-tab-item>
                    <y-tab-item title="文本" tabId="3"></y-tab-item>
                    <y-tab-item title="文本" tabId="4"></y-tab-item>
                </y-button-group>
            </div>
            <h4 class="yun-h4">图标按钮组</h4>
            <div class="row clearContentPadding">
                <y-button-group defaultActiveTabId="2">
                    <y-tab-item tabId="1"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item tabId="2"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item tabId="3"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item tabId="4"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                </y-button-group>
            </div>
            <h4 class="yun-h4">图标 + 文本按钮组</h4>
            <div class="row clearContentPadding">
                <y-button-group defaultActiveTabId="2">
                    <y-tab-item title="文本" tabId="1"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="文本" tabId="2"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="文本" tabId="3"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="文本" tabId="4"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                </y-button-group>
            </div>
            <h4 style="position:fixed;bottom:50px;left:12px;">按钮组固定在底部</h4>
            <y-button-group fixed defaultActiveTabId="2">
                <y-tab-item title="文本" tabId="1"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                <y-tab-item title="文本" tabId="2"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                <y-tab-item title="文本" tabId="3"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                <y-tab-item title="文本" tabId="4"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
            </y-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-button-group-demo'
    }

</script>

<style lang="less">

</style>
