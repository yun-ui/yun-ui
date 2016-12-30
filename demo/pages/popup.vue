<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">弹窗 popup</h3>
            <p>YunUI 提供了几种弹窗规范。</p>
        </div>
        <!-- TODO 优化交互流程 -->
        <div class="close-popup" v-show="showPopup1" @click="showPopup1 = !showPopup1">关闭</div>
        <div class="close-popup" v-show="showPopup2" @click="showPopup2 = !showPopup2">关闭</div>
        <div class="close-popup" v-show="showPopup3" @click="showPopup3 = !showPopup3">关闭</div>
        <div class="close-popup" v-show="showPopup4" @click="showPopup4 = !showPopup4">关闭</div>
        <div class="close-popup" v-show="showPopup5" @click="showPopup5 = !showPopup5">关闭</div>
        <div class="close-popup" v-show="showPopup6" @click="showPopup6 = !showPopup6">关闭</div>
        <div class="content button-container">
            <yun-button type="linear" @click.native="showPopup1 = !showPopup1">确认类弹窗</yun-button>
            <yun-button type="linear" @click.native="showPopup2 = !showPopup2">输入类（单行）弹窗</yun-button>
            <yun-button type="linear" @click.native="showPopup3 = !showPopup3">输入类（多行）弹窗</yun-button>
            <yun-button type="linear" @click.native="showPopup4 = !showPopup4">内容带跳转按钮弹窗</yun-button>
            <yun-button type="linear" @click.native="showPopup5 = !showPopup5">宣传弹窗</yun-button>
            <yun-button type="linear" @click.native="showPopup6 = !showPopup6">输入类弹窗错误提示</yun-button>
        </div>

        <yun-popup title="标题" v-show="showPopup1"
                   content="文本内容文本内容文本内容文本内容文本内容
                            文本内容文本内容文本内容文本内容文本内容">
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="确定" class="active"></yun-tab-item>
            </yun-button-group>
        </yun-popup>

        <yun-popup title="标题" v-show="showPopup2"
                   input="input">
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="确定"></yun-tab-item>
                <yun-tab-item class="active" title="取消"></yun-tab-item>
            </yun-button-group>
        </yun-popup>

        <yun-popup title="标题" v-show="showPopup3"
                   input="textarea">
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="确定"></yun-tab-item>
                <yun-tab-item class="active" title="取消"></yun-tab-item>
            </yun-button-group>
        </yun-popup>

        <yun-popup title="标题" v-show="showPopup4"
                   content="文本内容文本内容文本内容文本内容文本内容
                            文本内容文本内容文本内容文本内容文本内容">
            <yun-button size="large" type="normal" slot="button">文本</yun-button>
            <yun-button size="large" type="normal" disabled slot="button">文本</yun-button>
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="知道了"></yun-tab-item>
            </yun-button-group>
        </yun-popup>

        <yun-popup title="标题" v-show="showPopup5"
                   :textList="textListArray">
            <img src="../assets/popup-cover.png" slot="cover"/>
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="知道了"></yun-tab-item>
                <yun-tab-item title="了解更多" class="active"></yun-tab-item>
            </yun-button-group>
        </yun-popup>

        <yun-popup title="标题" v-show="showPopup6" input="input"
                   content="文本内容文本内容文本内容文本内容文本内容
                            文本内容文本内容文本内容文本内容文本内容">
            <yun-button-group slot="buttonGroup">
                <yun-tab-item title="知道了"></yun-tab-item>
            </yun-button-group>
        </yun-popup>
    </div>
</template>

<script>
    // TODO
    export default {
        name: 'yun-toast-demo',
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
        }
    }

</script>

<style lang="less">
    .close-popup{
        position: fixed;
        z-index:10;
        color: #ffffff;
        right:12px;
        top:12px;
        width:44px;
        height:44px;
        border-radius: 50%;
        line-height: 44px;
        text-align: center;
        background-color: rgba(255,255,255,0.2);
        &:hover{
            background-color: rgba(255,255,255,0.4);
            cursor: pointer;
        }
    }
</style>
