<template>
    <div class="page-full">
        <div class="title">
            <h3 class="yun-h3">徽章 Badge</h3>
            <p>YunUI 提供一套简介的统一标记样式，用于标注状态，提醒。
                我们还支持用户自定义颜色（这里推荐使用官方配色）。</p>
        </div>
        <div class="content yun-bg-white">
            <div class="row yun-text-center">
                <y-badge type="text" text="new"></y-badge>
                <y-badge type="text" text="100" color="#3CBAFF"></y-badge>
                <y-badge type="text" text="100" color="#94D301"></y-badge>
                <y-badge type="text" text="100" color="#F87E4E"></y-badge>
                <y-badge type="text" text="100" color="#F7BF28"></y-badge>
                <y-badge type="text" text="100" color="#AF65DF"></y-badge>
                <y-badge type="text" text="100" color="#FB6691"></y-badge>
                <y-badge type="text" text="100" color="#F35959"></y-badge>
                <y-badge type="text" text="100" color="#31D2EA"></y-badge>
                <y-badge type="text" text="100" color="#4788D8"></y-badge>
                <y-badge type="text" text="100" color="#01D386"></y-badge>
                <y-badge type="text" text="100" color="#C18E6F"></y-badge>
                <y-badge type="text" text="100" color="#6D777D"></y-badge>
                <y-badge type="text" text="100" color="#EAEFF3"></y-badge>
                <y-badge type="text" text="1"></y-badge>
            </div>
            <div class="row yun-text-center">
                <y-badge></y-badge>
                <y-badge color="#3CBAFF"></y-badge>
                <y-badge color="#94D301"></y-badge>
                <y-badge color="#F87E4E"></y-badge>
                <y-badge color="#F7BF28"></y-badge>
                <y-badge color="#AF65DF"></y-badge>
                <y-badge color="#FB6691"></y-badge>
                <y-badge color="#F35959"></y-badge>
                <y-badge color="#31D2EA"></y-badge>
                <y-badge color="#4788D8"></y-badge>
                <y-badge color="#01D386"></y-badge>
                <y-badge color="#C18E6F"></y-badge>
                <y-badge color="#6D777D"></y-badge>
                <y-badge color="#EAEFF3"></y-badge>
            </div>
        </div>
        <div class="row clearContentPadding">
            <y-navbar defaultActiveTabId="1">
                <y-tab-item title="文本" tabId="1"></y-tab-item>
                <y-tab-item title="文本" tabId="2">
                    <y-badge color="#fa5959" class="position-badge position-badge-1"></y-badge>
                </y-tab-item>
                <y-tab-item title="文本" tabId="3"></y-tab-item>
            </y-navbar>
        </div>
        <div class="row clearContentPadding">
            <y-navbar defaultActiveTabId="1">
                <y-tab-item title="文本" tabId="1">
                    <y-badge type="text" text="1" color="#fa5959" class="position-badge position-badge-2"></y-badge>
                </y-tab-item>
                <y-tab-item title="文本" tabId="2"></y-tab-item>
                <y-tab-item title="文本" tabId="3"></y-tab-item>
            </y-navbar>
        </div>
        <div class="row clearContentPadding">
            <y-navbar defaultActiveTabId="1">
                <y-tab-item title="文本" tabId="1">
                    <y-badge type="text" text="new" color="#fa5959" class="position-badge position-badge-3"></y-badge>
                </y-tab-item>
                <y-tab-item title="文本" tabId="2"></y-tab-item>
                <y-tab-item title="文本" tabId="3"></y-tab-item>
            </y-navbar>
        </div>
    </div>
</template>

<script>
    export default {}

</script>

<style lang="less" scoped>
    .content {
        padding-top:20px;
    }
    .row{
        margin-top:12px;
        .yun-navbar{
            position: relative;
        }
    }
    .position-badge{
        position: absolute;
        top:50%;
        right:12px;
    }
    .position-badge-1{
        margin-top:2px;
    }
    .position-badge-2{
        margin-top:-7px;
    }
    .position-badge-3{
        margin-top:-7px;
        right:4px;
    }
</style>