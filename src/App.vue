<template>
    <!--页面中所有内联样式都是作为效果展示-->
    <div>
        <!--actionSheet--start-->
        <y-button @click="toggleActionPanel">显示/隐藏Panel型ActionSheet</y-button>
        <y-button @click="toggleActionList">显示/隐藏List型ActionSheet</y-button>
        <y-button @click="toggleActionCheckbox">显示/隐藏Checkbox型ActionSheet</y-button>
        <y-action-sheet type="panel" panelTitle="分享到" :actionSheetItem="actionSheetPanelItem"
                        @maskClicked="maskClicked" :show="showActionPanel" @cancel="maskClicked">
        </y-action-sheet>
        <y-action-sheet type="list" @maskClicked="maskClicked" :show="showActionList"
                        @cancel="maskClicked" :actionSheetItem="actionSheetPanelItem">
        </y-action-sheet>
        <y-action-sheet type="checkbox" @maskClicked="maskClicked" @confirm="maskClicked" @change="actionSheetChange"
                        @cancel="maskClicked" :show="showActionCheckbox" :actionSheetItem="actionSheetCheckboxItem">
        </y-action-sheet>
        <!--actionSheet--end-->
        <!--cell--start-->
        <div class="group">
            <y-form @change="inputChange">
                <y-textarea placeholder="多行输入框" :limit="20"></y-textarea>
                <y-input label="单行输入框" defaultValue="默认值" placeholder="输入haha"></y-input>
                <y-radio :radioList="radioList"></y-radio>
                <!--<y-radio label="单选框" value="2" name="radio"></y-radio>-->
                <!--<y-radio label="单选框" value="3" name="radio"></y-radio>-->
                <!--<y-radio label="单选框" name="radio2"></y-radio>-->
                <!--<y-radio label="单选框" name="radio2"></y-radio>-->
                <!--<y-radio label="单选框" name="radio2"></y-radio>-->
                <y-checkbox :checkboxList="checkList"></y-checkbox>
                <y-counter label="计数器"></y-counter>
                <y-switch label="开关"></y-switch>
            </y-form>
            <!--<y-form>-->
            <!--<y-form-item type="input" label="单行输入框" placeholder="placeholder"></y-form-item>-->
            <!--<y-form-item type="textarea" placeholder="多行输入框" :limit="20"></y-form-item>-->
            <!--<y-form-item type="counter" label="计数器" :counterValue="10" :min="5" :max="20" :step="2"-->
            <!--@change="formCounterChange"></y-form-item>-->
            <!--<y-form-item type="switch" label="开关列表 默认关" @change="switchFormChange"></y-form-item>-->
            <!--<y-form-item type="switch" label="开关列表" :checked="true" @change="switchFormChange"></y-form-item>-->

            <!--<y-form-item type="checkbox" label="复选框" value="checkbox1" :checked="true"-->
            <!--@change="checkboxChange"></y-form-item>-->
            <!--<y-form-item type="checkbox" label="复选框" value="checkbox2" @change="checkboxChange"></y-form-item>-->
            <!--<y-form-item type="checkbox" label="复选框" value="checkbox3" @change="checkboxChange"></y-form-item>-->

            <!--<y-form-item type="radio" label="单选框" name="radio" :error="true"></y-form-item>-->
            <!--<y-form-item type="radio" label="单选框" name="radio"></y-form-item>-->
            <!--<y-form-item type="radio" label="单选框" name="radio"></y-form-item>-->
            <!--<y-form-item type="radio" label="单选框" name="radio2"></y-form-item>-->
            <!--<y-form-item type="radio" label="单选框" name="radio2"></y-form-item>-->
            <!--<y-form-item type="radio" label="单选框" name="radio2"></y-form-item>-->
            <!--<y-form-item type="imagePicker" label="照片选择器" text="已选择5张">-->
            <!--<img src="../src/assets/placeholder-figure.png" slot="image">-->
            <!--</y-form-item>-->
            <!--<y-form-item type="filePicker" label="选择附件" text="已选择2个" fileName="文件名称"-->
            <!--errorInfo="上传失败，点击重传" fileSize="9.2M/20M" uploadTime="12月25日 13:22 星期五">-->
            <!--<img src="../src/assets/placeholder-figure.png" slot="fileIcon">-->
            <!--</y-form-item>-->
            <!--</y-form>-->
        </div>
        <!--cell--end-->

        <!--search--start-->
        <div>
            <y-search placeholder="输入以搜索" text="搜索" @search="search"></y-search>
            输入的内容：{{ searchText }}
        </div>
        <!--search--end-->
        <!--badge--start-->
        <div>
            <y-badge type="text" text="100+" color="#3cbaff"></y-badge>
            <y-badge type="text" text="1"></y-badge>
            <y-badge></y-badge>
        </div>
        <!--badge--end-->

        <!--popup--start-->
        <y-button type="normal" @click='togglePop'>显示/隐藏Popup弹窗</y-button>
        <y-popup title="标题标题标" :show="showPop"
                 content="文本内容文本内容文本内容文本内容文本内容
                    内容文本内容文本内容文本内容文本内容文本内容文本内容"
                 input="textarea"
                 :textList="textListArray"
                 @maskClicked="maskClicked">
            <img src="../src/assets/popup-cover.png" slot="cover"/>
            <y-button size="large" type="normal" slot="button">默認按钮</y-button>
            <y-button size="large" type="normal" disabled slot="button">默認按钮</y-button>
            <y-button-group slot="buttonGroup">
                <y-tab-item title="取消"></y-tab-item>
                <y-tab-item title="确认" class="active"></y-tab-item>
            </y-button-group>

        </y-popup>
        <!--popup--end-->

        <!--Base--start-->
        <div>
            <h1 class="y-h1">Base 基础样式</h1>
            <p>基础样式主要分为：文本（字体），颜色，布局</p>
            <h2>文本</h2>
            <h3>文本大小</h3>
            <ul>
                <li><h1 class="y-h1">h1,0.36rem</h1></li>
                <li><h2 class="y-h2">h2,0.34rem</h2></li>
                <li><h3 class="y-h3">h3,0.32rem</h3></li>
                <li><h4 class="y-h4">h4,0.28rem</h4></li>
                <li><h5 class="y-h5">h5,0.26rem</h5></li>
                <li><h6 class="y-h6">h6,0.2rem</h6></li>
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
                <p class="y-left">左浮动</p>
                <p class="y-right">右浮动</p>
            </div>
            <div>
                <p class="y-text-left">文字左对齐</p>
                <p class="y-text-center">文字居中对齐</p>
                <p class="y-text-right">文字右对齐</p>
                <div class="y-block-center">定宽的块级元素水平居中</div>
            </div>
        </div>
        <!--Base--end-->
        <!--Button--start-->
        <div>
            <h1>Button</h1>
            <y-button type="normal">默認按钮</y-button>
            <y-button type="linear">线性按钮</y-button>
            <y-button size="large">large 撑满按钮</y-button>
            <y-button size="middle">middle 中等按钮</y-button>
            <y-button size="small">small 小按钮</y-button>
            <y-button type="linear" size="middle">反转（线性）按钮 中等按钮</y-button>
            <y-button disabled>禁用按钮</y-button>
        </div>
        <!--Button--end-->

        <!--ButtonGroup-start-->
        <div>
            <h1>ButtonGroup</h1>
            <div style="position:relative;height:50px;">
                <y-button-group defaultActiveTabId="2">
                    <y-tab-item title="text" tabId="0"></y-tab-item>
                    <y-tab-item title="text" tabId="1"></y-tab-item>
                    <y-tab-item title="text" tabId="2"></y-tab-item>
                    <y-tab-item title="text" tabId="3"></y-tab-item>
                </y-button-group>
            </div>
            <div style="position:relative;height:50px;">
                <y-button-group>
                    <y-tab-item><i class="iconfont icon-demo" slot="icon"></i>
                        <y-badge></y-badge>
                    </y-tab-item>
                    <y-tab-item><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                </y-button-group>
            </div>
            <div style="position:relative;height:50px;">
                <y-button-group>
                    <y-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i>
                        <y-badge type="text" value="100+" color="#3cbaff"></y-badge>
                    </y-tab-item>
                    <y-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                </y-button-group>
            </div>
        </div>
        <!--ButtonGroup-end-->

        <!--Tabbar--start-->
        <div>
            <h1>Tabbar</h1>
            <div style="position:relative;height:50px">
                <y-tabbar @change="navChange" defaultActiveTabId="3">
                    <y-tab-item title="text" tabId="1"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="text" tabId="2"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="text" tabId="3"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                    <y-tab-item title="text" tabId="4"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
                </y-tabbar>
            </div>

        </div>
        <!--Tabbar--end-->

        <!--Navbar--start-->
        <div>
            <h1>Navbar</h1>
            <div style="position:relative;height:100px;background-color:#f2f2f2">
                <y-navbar @change="navChange" defaultActiveTabId="2">
                    <y-tab-item title="text" tabId="1"></y-tab-item>
                    <y-tab-item title="text" tabId="2"></y-tab-item>
                    <y-tab-item title="text" tabId="3"></y-tab-item>
                    <y-tab-item title="text" tabId="4"></y-tab-item>
                </y-navbar>
            </div>
            <div style="position:relative;height:100px;background-color:#f2f2f2">
                <y-navbar @change="navChange" defaultActiveTabId="1">
                    <y-tab-item title="text" tabId="1"></y-tab-item>
                    <y-tab-item title="text" tabId="2"></y-tab-item>
                    <y-tab-item title="text" tabId="3"></y-tab-item>
                </y-navbar>
            </div>
            <div style="position:relative;height:100px;background-color:#f2f2f2">
                <y-navbar @change="navChange" defaultActiveTabId="text1">
                    <y-tab-item title="text" tabId="text1"></y-tab-item>
                    <y-tab-item title="text" tabId="text2"></y-tab-item>
                </y-navbar>
            </div>

        </div>
        <!--Navbar--end-->

        <!--list--start-->
        <y-list-item title="列表标题" secondaryText="辅助文本" multi>
            <img src="../src/assets/placeholder-figure.png" slot="icon">
        </y-list-item>

        <y-list-container>
            <y-list-item title="列表标题" secondaryText="辅助文本" multi>
                <img src="../src/assets/placeholder-figure.png" slot="icon">
            </y-list-item>

            <y-list-item title="列表标题" secondaryText="辅助文本" multi link>
            </y-list-item>

            <y-list-item title="列表标题" secondaryText="辅助文本" multi>
                <img src="../src/assets/placeholder-figure.png" slot="img">
            </y-list-item>
            <y-list-item title="列表标题" secondaryText="辅助文本" multi avatar>
                <img src="../src/assets/placeholder-figure.png" slot="img">
            </y-list-item>

            <y-list-item title="列表标题" secondaryText="辅助文本" link>
                <img src="../src/assets/placeholder-figure.png" slot="iconLeft">
                <img src="../src/assets/placeholder-figure.png" slot="iconRight">
            </y-list-item>

            <y-list-item title="列表标题" link>
                <img src="../src/assets/placeholder-figure.png" slot="iconLeft">
            </y-list-item>

            <y-list-item title="列表标题" secondaryText="辅助文本">
                <img src="../src/assets/placeholder-figure.png" slot="iconRight">
            </y-list-item>
        </y-list-container>

        <!--list--end-->
        <y-button @click="toggleLoading">显示/隐藏Loading</y-button>
        <y-loading content="加载中" :show="showLoading" refresh>
            <img src="../src/assets/loading.png" slot="icon"/>
        </y-loading>
        <y-button @click="showToast">显示Toast</y-button>
    </div>
</template>

<script>
    import {
        yButton,
        yTabbar,
        yTabItem,
        yButtonGroup,
        yNavbar,
        yPopup,
        yListContainer,
        yListItem,
        yForm,
        yFormGroup,
        yTextarea,
        yInput,
        yRadio,
        yCheckbox,
        yLoading,
        ySwitch,
        yBadge,
        ySearch,
        yCounter,
        yActionSheet
    } from '../packages/index'
    import {UIName} from 'mixins'
    export default {
        props: {},
        methods: {
            inputChange: function (value, label) {
                console.log(value)
                console.log(label)
            },
            togglePop: function () {
                this.showPop = !this.showPop
            },
            search: function (value) {
                this.searchText = value
            },
            navChange: function (activeTab) {
                console.log(activeTab)
            },
            showToast: function () {
                this.$toast({
                    content: 'test',
                    duration: 500,
                    position: 'bottom'
                })
            },
            toggleLoading: function () {
                this.showLoading = !this.showLoading
            },
            toggleActionPanel: function () {
                this.showActionPanel = !this.showActionPanel
            },
            toggleActionList: function () {
                this.showActionList = !this.showActionList
            },
            toggleActionCheckbox: function () {
                this.showActionCheckbox = !this.showActionCheckbox
            },
            maskClicked: function () {
                console.log('mask clicked')
                this.showActionList = false
                this.showActionCheckbox = false
                this.showActionPanel = false
                this.showPop = false
            },
            formCounterChange: function (value) {
                console.log(value)
            },
            switchFormChange: function (value) {
                console.log(value)
            },
            checkboxChange: function (value, status) {
                console.log(value)
                console.log(status)
            },
            actionItemClick: function () {
                console.log('action item clicked')
            },
            actionSheetChange: function (value, status) {
                console.log(value)
                console.log(status)
            }
        },
        data () {
            return {
                showPop: false,
                radioList: [
                    {
                        label: '单选框1',
                        value: '1',
                        name: 'radio'
                    },
                    {
                        label: '单选框2',
                        value: '1',
                        name: 'radio'
                    },
                    {
                        label: '单选框3',
                        value: '1',
                        name: 'radio'
                    },
                    {
                        label: '单选框4',
                        checked: true,
                        value: '1',
                        name: 'radio'
                    }
                ],
                checkList: [
                    {
                        label: '复选框1',
                        checked: false,
                        value: '1'
                    },
                    {
                        label: '复选框2',
                        checked: false,
                        value: '2'
                    },
                    {
                        label: '复选框3',
                        checked: true,
                        value: '3'
                    }
                ],
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
                ],
                actionSheetPanelItem: [
                    {
                        title: '微信',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '同事圈',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '收藏',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '上传电脑',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '转发',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '其他应用',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    }
                ],
                actionSheetCheckboxItem: [
                    {
                        title: '微信',
                        icon: require('../src/assets/placeholder-figure.png'),
                        checked: true,
                        value: 'wechat',
                        callback: this.actionItemClick
                    },
                    {
                        title: '同事圈',
                        icon: require('../src/assets/placeholder-figure.png'),
                        value: 'group',
                        callback: this.actionItemClick
                    },
                    {
                        title: '收藏',
                        icon: require('../src/assets/placeholder-figure.png'),
                        value: 'favorite',
                        callback: this.actionItemClick
                    },
                    {
                        title: '上传到电脑',
                        checked: true,
                        value: 'upload',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '转发',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '其他应用打开',
                        icon: require('../src/assets/placeholder-figure.png'),
                        callback: this.actionItemClick
                    }
                ],
                searchText: '',
                selectedTab: false,
                showLoading: false,
                showActionPanel: false,
                showActionList: false,
                showActionCheckbox: false
            }
        },
        mixins: [UIName],
        created () {
        },
        components: {
            yButton,
            yTabbar,
            yTabItem,
            yButtonGroup,
            yNavbar,
            yPopup,
            yForm,
            yFormGroup,
            yTextarea,
            yInput,
            yRadio,
            yCheckbox,
            yListContainer,
            yListItem,
            yLoading,
            ySwitch,
            yBadge,
            ySearch,
            yCounter,
            yActionSheet
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../packages/style/stylesheets/reset.css";
    @import "../packages/style/stylesheets/base";

    html, body {
        height: 100%;
        min-height: 100%;
    }

    body {
        color: #030303;
        font-size: 14px;
        font-family: Microsoft YaHei, Arial, sans-serif;
        background-color: #f2f2f2 !important;
    }

    .group {
        margin-top: 20px;
    }
</style>
