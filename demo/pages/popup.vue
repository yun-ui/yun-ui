<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">弹窗 popup</h3>
            <p>YunUI 提供了几种弹窗规范。</p>
        </div>
        <div class="content button-container">
            <y-button type="linear" @click="showPopup1 = true">确认类弹窗
            </y-button>
            <y-button type="linear" @click="showPopup2 = !showPopup2">输入类（单行）弹窗</y-button>
            <y-button type="linear" @click="showPopup3 = !showPopup3">输入类（多行）弹窗</y-button>
            <y-button type="linear" @click="showPopup4 = !showPopup4">内容带跳转按钮弹窗</y-button>
            <y-button type="linear" @click="showPopup5 = !showPopup5">宣传弹窗</y-button>
        </div>

        <y-popup title="标题" :show="showPopup1" @maskClicked="maskClicked"
                   content="文本内容文本内容文本内容文本内容文本内容
                            文本内容文本内容文本内容文本内容文本内容">
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup2" @maskClicked="maskClicked"
                   input="input">
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="取消" tabId="2" @click="maskClicked"></y-tab-item>
                <y-tab-item title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup3" @maskClicked="maskClicked"
                   input="textarea">
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="取消" tabId="2" @click="maskClicked"></y-tab-item>
                <y-tab-item class="active" title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup4" @maskClicked="maskClicked"
                   content="文本内容文本内容文本内容文本内容文本内容
                            文本内容文本内容文本内容文本内容文本内容">
            <y-button size="large" type="normal" slot="button">文本</y-button>
            <y-button size="large" type="normal" disabled slot="button">文本</y-button>
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="知道了" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup5" @maskClicked="maskClicked"
                   :textList="textListArray">
            <img src="../assets/popup-cover.png" slot="cover"/>
            <y-button-group slot="buttonGroup" defaultActiveTabId="2">
                <y-tab-item title="知道了" tabId="1" @click="maskClicked"></y-tab-item>
                <y-tab-item title="了解更多" class="active" tabId="2" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>
    </div>
</template>

<script>
    export default {
        name: 'y-toast-demo',
        props: {},
        data: function () {
            return {
                showPopup1: false,
                showPopup2: false,
                showPopup3: false,
                showPopup4: false,
                showPopup5: false,
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
        created () {
            console.log('button demo loaded')
        },
        methods: {
            maskClicked: function () {
                this.showPopup1 = false
                this.showPopup2 = false
                this.showPopup3 = false
                this.showPopup4 = false
                this.showPopup5 = false
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    .close-popup {
        position: fixed;
        z-index: 10;
        color: #ffffff;
        right: 12px;
        top: 12px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        line-height: 44px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.2);
        &:hover {
            background-color: rgba(255, 255, 255, 0.4);
            cursor: pointer;
        }
    }
</style>
