<template>
    <div class="page-full yun-bg-white">
        <div class="title">
            <h3 class="yun-h3">辅助类 Utility</h3>
            <p>YunUI 提供了一系列辅助类，这些辅助类直接作用在HTML元素上，
                可以快速帮助你完善一些排版细节。</p>
            <p>这些辅助类主要分为：<strong>图标、快速背景色、文本缺省、情景文字、快速定位、
                割线、1px边框等。</strong></p>
        </div>
        <div class="content utility">
            <h4 class="yun-h4">图标库 Icon</h4>
            <div class="row icon-container">
                <ul>
                    <li>
                        <span><i class="iconfont icon-arrow-up"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-arrow-down"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-arrow-left"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-arrow-right"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-true"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-delete"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-close-line"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-addr"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-close"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-add-field"></i></span>
                    </li>
                    <!--<li>-->
                    <!--<span><i class="iconfont icon-demo"></i></span>-->
                    <!--</li>-->
                    <li>
                        <span><i class="iconfont icon-warn"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-add-block"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-delete-block"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-close-block"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-true-block"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-addr-block"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-sina"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-qq"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-email"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-friends-community"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-colleague-community"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-wechat"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-pop"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-user"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-sun"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-moon"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-search"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-structure"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-map"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-like"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-images"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-forward"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-filter"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-comment"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-clock"></i></span>
                    </li>
                    <li>
                        <span><i class="iconfont icon-forward"></i></span>
                    </li>
                </ul>
            </div>
            <h4 class="yun-h4">快速背景色 Quick Background Color</h4>
            <div class="row">
                <ul>
                    <li class="yun-bg-blue"></li>
                    <li class="yun-bg-olive"></li>
                    <li class="yun-bg-orange"></li>
                    <li class="yun-bg-yellow"></li>
                    <li class="yun-bg-purple"></li>
                    <li class="yun-bg-pink"></li>
                    <li class="yun-bg-red"></li>
                    <li class="yun-bg-skyblue"></li>
                    <li class="yun-bg-royalblue"></li>
                    <li class="yun-bg-green"></li>
                    <li class="yun-bg-brown"></li>
                    <li class="yun-bg-grey"></li>
                    <li class="yun-bg-white yun-border"></li>
                </ul>
            </div>
            <h4 class="yun-h4">情景文字 Contextual Text</h4>
            <div class="row">
                <div class="panel">
                    <p class="yun-text-default">默认文本</p>
                    <p class="yun-text-secondary">辅助文本</p>
                    <p class="yun-text-active">活动，点击，高亮文本</p>
                    <p class="yun-text-warn">警告本文</p>
                    <p class="yun-text-tips">提示文本</p>
                    <p class="yun-bg-grey yun-text-white">白色文本</p>
                </div>
            </div>
            <h4 class="yun-h4">文本缺省 Text Ellipsis</h4>
            <div class="row">
                <div class="panel">
                    <small class="yun-ellipse">单行文本单行文本单行文本单行文本单行文本单行文本单行文本单行文本</small>
                </div>
                <div class="panel">
                    <small class="yun-multi-ellipse">双行文本双行文本双行文本双行文本双行文本双行文本双行文本
                        双行文本双行文本双行文本双行文本双行文本双行文本双行文本双行文本双行文本
                    </small>
                </div>
            </div>
            <h4 class="yun-h4">快速定位</h4>
            <small class="yun-text-secondary">快速定位提供：左右浮动，定宽的块级元素水平居中等定位方式。</small>
            <div class="row">
                <div class="panel clearfix">
                    <div class="yun-left">left</div>
                    <div class="yun-right">right</div>
                </div>
                <div class="panel yun-text-center clearfix">
                    <div class="block-center">blockCenter</div>
                </div>
            </div>
            <h4 class="yun-h4">1px 边框</h4>
            <div class="row">
                <small class="yun-text-secondary">HTML元素的：上边框、下边框、全边框和割线</small>
                <div class="row border-1px">
                    <p class="yun-border yun-border-t">上边框</p>
                    <p class="yun-border yun-border-b">下边框</p>
                    <p class="yun-border">全边框边框</p>
                    <p><span class="yun-divided">割线</span><span class="yun-divided">割线</span>
                        <span class="yun-divided">割线</span><span class="yun-divided">割线</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}

</script>

<style lang="less">

</style>
