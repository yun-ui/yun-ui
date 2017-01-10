<template>
    <div class="yun-bg-white page-full">
        <div class="title">
            <h3 class="yun-h3">颜色 Color</h3>
            <p>YunUI 提供云之家官方使用的一系列颜色，用于轻应用主题色，以及第三方开发使用。</p>
        </div>
        <div class="content color">
            <h4 class="yun-h4">主题色</h4>
            <div class="row">
                <div class="yun-bg-blue theme-blcok-color">Blue</div>
            </div>
            <h4 class="yun-h4">官方配色</h4>
            <small class="yun-small yun-text-secondary">以下颜色请使用在应用LOGO底板色及主题色。</small>
            <div class="row yun-text-white">
                <ul>
                    <li class="yun-bg-blue">#3CBAFF</li>
                    <li class="yun-bg-olive">#94D301</li>
                    <li class="yun-bg-orange">#F87E4E</li>
                    <li class="yun-bg-yellow">#F7BF28</li>
                    <li class="yun-bg-purple">#AF65DF</li>
                    <li class="yun-bg-pink"> #FB6691</li>
                    <li class="yun-bg-red"> #F35959</li>
                    <li class="yun-bg-skyblue"> #31D2EA</li>
                    <li class="yun-bg-royalblue">#4788D8</li>
                    <li class="yun-bg-green">#01D386</li>
                    <li class="yun-bg-brown">#C18E6F</li>
                    <li class="yun-bg-grey"> #6D777D</li>
                </ul>
            </div>
            <h4 class="yun-h4">颜色搭配使用规范</h4>
            <div class="panel" style="padding-bottom:30px">
                <small class="yun-small yun-text-secondary">
                    由于应用开发可能使用多种颜色，为了达到一致的视觉感受，
                    我们为你提供颜色搭配使用的建议。
                </small>
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
    .theme-blcok-color {
        width: 120px;
        height: 44px;
        border-radius: 4px;
        color: #ffffff;
        text-align: center;
        line-height: 44px;
    }
</style>
