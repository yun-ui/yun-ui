<template>
    <!--页面中所有内联样式都是作为效果展示-->
    <div>
        <!--<yun-pop-menu popMenuTitle="分享到" menuItemName="微信" style="display:none">-->
        <!--<img src="../src/assets/placeholder-figure.png" slot="menuItemImage"/>-->
        <!--</yun-pop-menu>-->
        <!--switch--start-->
        <yun-switch></yun-switch>
        <yun-counter></yun-counter>
        <yun-checkbox></yun-checkbox>
        <!--switch--end-->
        <!--cell--start-->
        <div class="group">
            <yun-form>
                <yun-form-item filePicker title="选择附件" secondary="已选择2个" fileName="文件名称"
                               errorInfo="错误信息" fileSize="9.2M/20M" uploadTime="12月25日 13:22 星期五">
                    <img src="../src/assets/placeholder-figure.png" slot="fileIcon">
                </yun-form-item>
            </yun-form>
        </div>
        <div class="group">
            <yun-form>
                <yun-form-item imagePicker title="照片选择器" secondary="已选择5张">
                    <img src="../src/assets/placeholder-figure.png" slot="image">
                </yun-form-item>
            </yun-form>
        </div>
        <div class="group">
            <yun-form>
                <yun-form-item type="input" label="单行输入框" placeholder="placeholder"></yun-form-item>
                <yun-form-item type="textarea" placeholder="多行输入框"></yun-form-item>
                <yun-form-item type="counter" label="计数器"></yun-form-item>
                <yun-form-item type="switch" label="开关列表"></yun-form-item>
                <yun-form-item type="checkbox" label="复选框"></yun-form-item>
                <yun-form-item type="radio" label="单选框"></yun-form-item>
                <yun-form-item type="imagePicker" label="照片选择器" text="已选择5张">
                    <img src="../src/assets/placeholder-figure.png" slot="image">
                </yun-form-item>
                <yun-form-item type="filePicker" label="选择附件" text="已选择2个" fileName="文件名称"
                               errorInfo="错误信息" fileSize="9.2M/20M" uploadTime="12月25日 13:22 星期五">
                    <img src="../src/assets/placeholder-figure.png" slot="fileIcon">
                </yun-form-item>
            </yun-form>
        </div>
        <!--cell--end-->

        <!--search--starat-->
        <div>
            <yun-search></yun-search>
        </div>
        <!--search--end-->
        <!--badge--starat-->
        <div>
            <yun-badge type="text" value="100+" color="#3cbaff"></yun-badge>
            <yun-badge type="text" value="1"></yun-badge>
            <yun-badge></yun-badge>
        </div>
        <!--badge--end-->

        <!--popup--start-->
        <yun-button type="normal" @click='handleClick'>click show popup</yun-button>
        <!--<yun-popup title="标题标题标"
                   content="文本内容文本内容文本内容文本内容文本内容
                    内容文本内容文本内容文本内容文本内容文本内容文本内容"
                   input="textarea"
                   :textList="textListArray">
            <img src="../src/assets/popup-cover.png" slot="cover"/>
            <yun-button size="large" type="normal" slot="button">默認按钮</yun-button>
            <yun-button size="large" type="normal" disabled slot="button">默認按钮</yun-button>
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="取消"></yun-tab-item>
                <yun-tab-item title="确认"class="active"></yun-tab-item>
            </yun-button-group>

        </yun-popup>-->
        <!--popup--end-->

        <!--Base--start-->
        <div>
            <h1 class="yun-h1">Base 基础样式</h1>
            <p>基础样式主要分为：文本（字体），颜色，布局</p>
            <h2>文本</h2>
            <h3>文本大小</h3>
            <ul>
                <li><h1 class="yun-h1">h1,0.36rem</h1></li>
                <li><h2 class="yun-h2">h2,0.34rem</h2></li>
                <li><h3 class="yun-h3">h3,0.32rem</h3></li>
                <li><h4 class="yun-h4">h4,0.28rem</h4></li>
                <li><h5 class="yun-h5">h5,0.26rem</h5></li>
                <li><h6 class="yun-h6">h6,0.2rem</h6></li>
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
                <p class="yun-left">左浮动</p>
                <p class="yun-right">右浮动</p>
            </div>
            <div>
                <p class="yun-text-left">文字左对齐</p>
                <p class="yun-text-center">文字居中对齐</p>
                <p class="yun-text-right">文字右对齐</p>
                <div class="yun-block-center">定宽的块级元素水平居中</div>
            </div>
        </div>
        <!--Base--end-->
        <!--Button--start-->
        <div>
            <h1>Button</h1>
            <yun-button type="normal">默認按钮</yun-button>
            <yun-button type="linear">线性按钮</yun-button>
            <yun-button size="large">large 撑满按钮</yun-button>
            <yun-button size="middle">middle 中等按钮</yun-button>
            <yun-button size="small">small 小按钮</yun-button>
            <yun-button type="linear" size="middle">反转（线性）按钮 中等按钮</yun-button>
            <yun-button disabled>禁用按钮</yun-button>
        </div>
        <!--Button--end-->

        <!--ButtonGroup-start-->
        <div>
            <h1>ButtonGroup</h1>
            <div style="position:relative;height:50px;">
                <yun-button-group>
                    <yun-tab-item title="text"></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                </yun-button-group>
            </div>
            <div style="position:relative;height:50px;">
                <yun-button-group>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i>
                        <yun-badge></yun-badge>
                    </yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                </yun-button-group>
            </div>
            <div style="position:relative;height:50px;">
                <yun-button-group>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i>
                        <yun-badge type="text" value="100+" color="#3cbaff"></yun-badge>
                    </yun-tab-item>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                </yun-button-group>
            </div>
        </div>
        <!--ButtonGroup-end-->

        <!--Tabbar--start-->
        <div>
            <h1>Tabbar</h1>
            <div style="position:relative;height:50px">
                <yun-tabbar>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
                </yun-tabbar>
            </div>

        </div>
        <!--Tabbar--end-->

        <!--Navbar--start-->
        <div>
            <h1>Navbar</h1>
            <div style="position:relative;height:100px;background-color:#f2f2f2">
                <yun-navbar>
                    <yun-tab-item title="text" active></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                </yun-navbar>
            </div>
            <div style="position:relative;height:100px;background-color:#f2f2f2">
                <yun-navbar>
                    <yun-tab-item title="text" active></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                </yun-navbar>
            </div>
            <div style="position:relative;height:100px;background-color:#f2f2f2">
                <yun-navbar>
                    <yun-tab-item title="text" active></yun-tab-item>
                    <yun-tab-item title="text"></yun-tab-item>
                </yun-navbar>
            </div>

        </div>
        <!--Navbar--end-->

        <!--list--start-->
        <yun-list-item title="列表标题" secondaryText="辅助文本" multi>
            <img src="../src/assets/placeholder-figure.png" slot="icon">
        </yun-list-item>

        <yun-list-container>
            <yun-list-item title="列表标题" secondaryText="辅助文本" multi>
                <img src="../src/assets/placeholder-figure.png" slot="icon">
            </yun-list-item>

            <yun-list-item title="列表标题" secondaryText="辅助文本" multi link>
            </yun-list-item>

            <yun-list-item title="列表标题" secondaryText="辅助文本" multi>
                <img src="../src/assets/placeholder-figure.png" slot="img">
            </yun-list-item>
            <yun-list-item title="列表标题" secondaryText="辅助文本" multi avatar>
                <img src="../src/assets/placeholder-figure.png" slot="img">
            </yun-list-item>

            <yun-list-item title="列表标题" secondaryText="辅助文本" link>
                <img src="../src/assets/placeholder-figure.png" slot="iconLeft">
                <img src="../src/assets/placeholder-figure.png" slot="iconRight">
            </yun-list-item>

            <yun-list-item title="列表标题" link>
                <img src="../src/assets/placeholder-figure.png" slot="iconLeft">
            </yun-list-item>

            <yun-list-item title="列表标题" secondaryText="辅助文本">
                <img src="../src/assets/placeholder-figure.png" slot="iconRight">
            </yun-list-item>
        </yun-list-container>

        <!--list--end-->
        <yun-loading content="加载中" style="display:none">
            <img src="../src/assets/loading.png" slot="icon"/>
        </yun-loading>
        <yun-toast content="操作成功" bottom style="display:none">
        </yun-toast>

    </div>
</template>

<script>
    import {
        yunButton,
        yunTabbar,
        yunTabItem,
        yunButtonGroup,
        yunNavbar,
        yunPopup,
        yunListContainer,
        yunListItem,
        yunForm,
        yunFormItem,
        yunLoading,
        yunToast,
        yunSwitch,
        yunBadge,
        yunSearch,
        yunCounter,
        yunCheckbox,
        yunPopMenu
    } from '../packages/index'
    import {UIName} from '../src/mixins/'
    export default {
        props: {},
        methods: {
            handleClick: function () {
                console.log('clicked')
                this.showPop = true
            },

            close () {
                console.log('close')
                this.showPop = false
            }
        },
        data () {
            return {
                showPop: false,
                textListArray: [
                    {
                        content: '这是一段文本'
                    },
                    {
                        content: '这是一段文本这是一段文本'
                    },
                    {
                        content: '这是一段文本这是一段文本这是一段文本这是一段文本'
                    }
                ]
            }
        },
        mixins: [UIName],
        created () {
        },
        components: {
            yunButton,
            yunTabbar,
            yunTabItem,
            yunButtonGroup,
            yunNavbar,
            yunPopup,
            yunForm,
            yunFormItem,
            yunListContainer,
            yunListItem,
            yunLoading,
            yunToast,
            yunSwitch,
            yunBadge,
            yunSearch,
            yunCounter,
            yunCheckbox,
            yunPopMenu
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../packages/style/stylesheets/base";

    body {
        background-color: #f2f2f2 !important;
    }

    .group {
        margin-top: 20px;
    }

</style>
