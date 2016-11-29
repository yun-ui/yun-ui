<template>
    <!--页面中所有内联样式都是作为效果展示-->
    <div>
        <!--Base--start-->
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
            <h2>辅助类</h2>
            <div class="clearfix">
                <p class="left">左浮动</p>
                <p class="right">右浮动</p>
            </div>
            <div>
                <p class="text-left">文字左对齐</p>
                <p class="text-center">文字居中对齐</p>
                <p class="text-right">文字右对齐</p>
                <div class="block-center">定宽的块级元素水平居中</div>
            </div>
        </div>
        <!--Base--end-->
        <!--Button--start-->
        <div>
            <h1>Button</h1>
            <yun-button type="normal">默認按钮</yun-button>
            <yun-button type="inverse">反转（线性）按钮</yun-button>
            <yun-button size="large">large 撑满按钮</yun-button>
            <yun-button size="middle">middle 中等按钮</yun-button>
            <yun-button size="small">small 小按钮</yun-button>
            <yun-button type="inverse" size="middle">反转（线性）按钮 中等按钮</yun-button>
            <yun-button disabled>禁用按钮</yun-button>
        </div>
        <!--Button--end-->

        <!--ButtonGroup-start-->
        <div>
            <h1>ButtonGroup</h1>
            <div style="position:relative;height:1rem;">
                <yun-button-group>
                    <yun-tab-item>新浪</yun-tab-item>
                    <yun-tab-item>同事圈</yun-tab-item>
                    <yun-tab-item>朋友圈</yun-tab-item>
                    <yun-tab-item>QQ</yun-tab-item>
                </yun-button-group>
            </div>
            <div style="position:relative;height:1rem;">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-sina"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-tongshiquan"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-pengyouquan"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-qq"></i></yun-tab-item>
                </yun-button-group>
            </div>
            <div style="position:relative;height:1rem;">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-sina"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-tongshiquan"></i>按钮</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-pengyouquan"></i>按钮</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-qq"></i>按钮</yun-tab-item>
                </yun-button-group>
            </div>
        </div>
        <!--ButtonGroup-end-->

        <!--Tabbar--start-->
        <div>
            <h1>Tabbar</h1>
            <div style="position:relative;height:1rem;">
                <yun-tabbar>
                    <yun-tab-item><i class="iconfont icon-sina"></i>新浪</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-tongshiquan"></i>同事圈</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-pengyouquan"></i>朋友圈</yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-qq"></i>QQ</yun-tab-item>
                </yun-tabbar>
            </div>

        </div>
        <!--Tabbar--end-->

        <!--Navbar--start-->
        <div>
            <h1>Navbar</h1>
            <div style="position:relative;height:1rem;background-color:#f2f2f2">
                <yun-navbar>
                    <yun-tab-item active>新浪</yun-tab-item>
                    <yun-tab-item>同事圈</yun-tab-item>
                    <yun-tab-item>朋友圈</yun-tab-item>
                    <yun-tab-item>QQ</yun-tab-item>
                </yun-navbar>
            </div>
            <div style="position:relative;height:1rem;background-color:#f2f2f2">
                <yun-navbar>
                    <yun-tab-item active>新浪</yun-tab-item>
                    <yun-tab-item>同事圈</yun-tab-item>
                    <yun-tab-item>朋友圈</yun-tab-item>
                </yun-navbar>
            </div>
            <div style="position:relative;height:1rem;background-color:#f2f2f2">
                <yun-navbar>
                    <yun-tab-item active>同事圈</yun-tab-item>
                    <yun-tab-item>朋友圈</yun-tab-item>
                </yun-navbar>
            </div>

        </div>
        <!--Navbar--end-->

        <!--Alert--start-->
        <yun-alert></yun-alert>
        <!--Alert--end-->

        <!--list--start-->
        <yun-list-container>
            <yun-list-item title="列表标题" secondaryText="辅助文本" multi>
                <img src="../src/assets/placeholder-figure.png" slot="img">
            </yun-list-item>

            <yun-list-item title="列表标题" secondaryText="辅助文本" link>
                <img src="../src/assets/placeholder-figure.png" slot="icon">
                <img src="../src/assets/placeholder-figure.png" slot="iconRight">
            </yun-list-item>

            <yun-list-item title="列表标题" secondaryText="辅助文本">
                <img src="../src/assets/placeholder-figure.png" slot="icon">
            </yun-list-item>

        </yun-list-container>
        <!--list--end-->

        <yun-toast></yun-toast>
    </div>
</template>

<script>
    import {
        yunButton,
        yunToast,
        yunTabbar,
        yunTabItem,
        yunButtonGroup,
        yunNavbar,
        yunAlert,
        yunListContainer,
        yunListItem
    } from '../packages/index'
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
            yunToast,
            yunTabbar,
            yunTabItem,
            yunButtonGroup,
            yunNavbar,
            yunAlert,
            yunListContainer,
            yunListItem
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    body {
        background-color: #f2f2f2 !important;
    }
</style>
