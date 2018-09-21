<template>
    <div class="page-full">
        <div class="title">
            <h3 class="yun-h3">徽章 Badge</h3>
            <p>YunUI 提供一套简介的统一标记样式，用于标注状态，提醒。
                我们还支持用户自定义颜色（这里推荐使用官方配色）。</p>
        </div>
        <div class="content yun-bg-white">
            <div>
                <span class="red-tips">红点提示规范：</span>
                <span class="tips-padding"><y-badge class="badge-doc-top"></y-badge></span>
                <span class="tips-padding"><y-badge type="text" text="1"></y-badge></span>
                <span class="tips-padding"><y-badge type="text" text="100"></y-badge></span>
                <span class="tips-padding"><y-badge type="text" text="new"></y-badge></span>
            </div>
        </div>
        <div class="row clearContentPadding">
            <y-navbar defaultActiveTabId="1">
                <y-tab-item title="导航文本" tabId="1">
                    <y-badge class="position-badge position-badge-1"></y-badge>
                </y-tab-item>
                <y-tab-item title="导航文本" tabId="2"></y-tab-item>
            </y-navbar>
        </div>
        <div class="row clearContentPadding">
            <y-navbar defaultActiveTabId="1">
                <y-tab-item title="导航文本" tabId="1">
                    <y-badge type="text" text="1" class="position-badge position-badge-2"></y-badge>
                </y-tab-item>
                <y-tab-item title="导航文本" tabId="2"></y-tab-item>
            </y-navbar>
        </div>
        <div class="row clearContentPadding">
            <y-navbar defaultActiveTabId="1">
                <y-tab-item title="导航文本" tabId="1">
                    <y-badge type="text" text="new" class="position-badge position-badge-3"></y-badge>
                </y-tab-item>
                <y-tab-item title="导航文本" tabId="2"></y-tab-item>
            </y-navbar>
        </div>
    </div>
</template>

<script>
    export default {}

</script>

<style lang="less" scoped>
    .content {
        padding: 18px 24px;
        .badge-doc-top{
            margin-top: 8px;
        }
        .red-tips {
          color: #3D464A;
          font-size: 12px;
          line-height: 17px;
        }
        .tips-padding {
            display: inline-block;
            padding-left: 15px;
        }
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
        margin-left: 4px;
    }
    .position-badge-1{
        margin-top:2px;
    }
    .position-badge-2{
        margin-top:-7px;
    }
    .position-badge-3{
        margin-top:-7px;
    }
</style>