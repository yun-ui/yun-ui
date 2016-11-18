<template>
    <div>
        <!--Base--star-->
        <div>
            <h1>Base 基础样式</h1>
            <p>基础样式主要分为：文本（字体），颜色，布局</p>
            <h2>文本</h2>
            <h3>文本大小</h3>
            <ul>
                <li><h1>h1,0.36rem</h1></li>
                <li><h2>h2,0.34rem</h2></li>
                <li><h3>h3,0.32rem</h3></li>
                <li><h4>h4,0.28rem</h4></li>
                <li><h5>h5,0.26rem</h5></li>
                <li><h6>h6,0.2rem</h6></li>
            </ul>
            <h3>文本颜色</h3>
            <ul>
                <li :class="UIName+'-text-default'">默认字体颜色#030303</li>
                <li :class="UIName+'-text-secondary'">辅助，次要字体颜色#98a1a8</li>
                <li :class="UIName+'-text-active'">活动，点击，高亮字体颜色#3cbaff</li>
                <li :class="UIName+'-text-warn'">警告字体颜色#f35959</li>
                <li :class="UIName+'-text-tips'">提示字体颜色#7a797b</li>
            </ul>
            <h2>flex 基于flex布局的栅格系统</h2>
            <div :class="UIName+'-flex-container'">
                <div :class="UIName+'-flex-item'">flex</div>
            </div>
            <div :class="UIName+'-flex-container'">
                <div :class="UIName+'-flex-item'">flex</div>
                <div :class="UIName+'-flex-item'">flex</div>
            </div>
            <div :class="UIName+'-flex-container'">
                <div :class="UIName+'-flex-item'">
                    <div :class="UIName+'-flex-content'">flex</div>
                </div>
                <div :class="UIName+'-flex-item'">
                    <div :class="UIName+'-flex-content'">flex</div>
                </div>
                <div :class="UIName+'-flex-item'">
                    <div :class="UIName+'-flex-content'">flexflexflexflexflex
                        flexflexflexflexflex
                    </div>
                </div>
            </div>
        </div>
        <!--Base--end-->
        <!--Button--star-->
        <yun-button type="normal">默認按钮</yun-button>
        <yun-button type="inverse">反转（线性）按钮</yun-button>
        <yun-button size="large">large 撑满按钮</yun-button>
        <yun-button size="middle">middle 中等按钮</yun-button>
        <yun-button size="small">small 小按钮</yun-button>
        <yun-button type="inverse" size="middle">反转（线性）按钮 中等按钮</yun-button>
        <yun-button disabled>禁用按钮</yun-button>
        <!--Button--end-->
        <yun-toast></yun-toast>
    </div>
</template>

<script>
    import {yunButton, yunToast} from '../packages/index'
    import {UIName} from '../src/mixins/'
    export default {
        props: {},
        methods: {},
        mixins: [UIName],
        created () {
            console.log(yunButton)
        },
        components: {
            yunButton,
            yunToast
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
</style>
