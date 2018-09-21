<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">弹窗 popup</h3>
            <p>YunUI 提供了几种弹窗规范。</p>
        </div>
        <div class="content button-container">
            <y-button type="linear" @click="showPopup1 = true">确认型弹窗</y-button>
            <y-button type="linear" @click="showPopup2 = !showPopup2">操作型弹窗</y-button>
            <y-button type="linear" @click="showPopup3 = !showPopup3">输入型 - 单行弹窗</y-button>
            <y-button type="linear" @click="showPopup4 = !showPopup4">输入类 - 多行弹窗</y-button>
            <y-button type="linear" @click="showPopup5 = !showPopup5">带跳转按钮弹窗</y-button>
            <y-button type="linear" @click="showPopup6 = !showPopup6">宣传页</y-button>
        </div>

        <y-popup title="标题" :show="showPopup1" @maskClicked="maskClicked"
                   content="这里是一段用来提示用户的文本性内容
                            双行样式" class="operate-display">
            <div>双行样式</div>
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

         <y-popup title="标题" :show="showPopup2" @maskClicked="maskClicked"
                   content="这里是一段提示文本的内容" class="operate-display">
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="取消" tabId="2" @click="maskClicked"></y-tab-item>
                <y-tab-item title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup3" @maskClicked="maskClicked"
                   input="input">
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="取消" tabId="2" @click="maskClicked"></y-tab-item>
                <y-tab-item title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup4" @maskClicked="maskClicked"
                   input="textarea">
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="取消" tabId="2" @click="maskClicked"></y-tab-item>
                <y-tab-item class="active" title="确定" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup5" @maskClicked="maskClicked"
                   content="这是一段说明性文字，如果有两行以内的內容显示区域不够，省略…">
            <y-button size="large" type="normal" slot="button">文本</y-button>
            <y-button size="large" type="normal" disabled slot="button">文本</y-button>
            <y-button-group slot="buttonGroup" defaultActiveTabId="1">
                <y-tab-item title="知道了" tabId="1" @click="maskClicked"></y-tab-item>
            </y-button-group>
        </y-popup>

        <y-popup title="标题" :show="showPopup6" @maskClicked="maskClicked"
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
                showPopup6: false,
                textListArray: [
                    {
                        content: '这是第一段说明内容'
                    },
                    {
                        content: '这是第二段说明内容'
                    },
                    {
                        content: '这是第三段说明内容，如果显示不完则使用下滑显示，不可增加弹窗高度'
                    }
                ]
            }
        },
        created () {
            console.log('button demo loaded')
        },
        methods: {
            maskClicked: function () {
                let self = this
                self.showPopup1 = false
                self.showPopup2 = false
                self.showPopup3 = false
                self.showPopup4 = false
                self.showPopup5 = false
                self.showPopup6 = false
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
    .popup-text-align{
        text-align: center;
    }
    .operate-display{
        .yun-popup-content{
            text-align: center;
        }
        .yun-multi-ellipse{
            display: block;
        }
    }
</style>
