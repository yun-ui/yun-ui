<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">操作面板 ActionSheet</h3>
            <p>YunUI 提供一组底部弹出操作面板组件。</p>
        </div>
        <div class="content button-container">
            <y-button type="linear" @click="toggleActionPanel">面板型</y-button>
            <y-button type="linear" @click="toggleActionList">列表型</y-button>
            <y-button type="linear" @click="toggleActionCheckbox">选项型</y-button>
        </div>
        <y-action-sheet type="panel" panelTitle="分享到" :actionSheetItem="actionSheetPanelItem"
                          @maskClicked="maskClicked" :show="showActionPanel" @cancel="maskClicked">
        </y-action-sheet>
        <y-action-sheet type="list" @maskClicked="maskClicked" :show="showActionList"
                          @cancel="maskClicked" :actionSheetItem="actionSheetPanelItem">
        </y-action-sheet>
        <y-action-sheet type="checkbox" @maskClicked="maskClicked" @confirm="maskClicked" @change="actionSheetChange"
                          @cancel="maskClicked" :show="showActionCheckbox" :actionSheetItem="actionSheetCheckboxItem">
        </y-action-sheet>
    </div>
</template>

<script>
    export default {
        name: 'y-action-sheet-demo',
        props: {},
        data () {
            return {
                actionSheetPanelItem: [
                    {
                        title: '微信',
                        icon: require('../assets/weixin.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '朋友圈',
                        icon: require('../assets/weixin-circle.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '同事圈',
                        icon: require('../assets/colleague-circle.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '同事',
                        icon: require('../assets/colleague.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: 'QQ',
                        icon: require('../assets/qq.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: 'QQ空间',
                        icon: require('../assets/qq-circle.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '短信',
                        icon: require('../assets/short-message.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '微博',
                        icon: require('../assets/weibo.png'),
                        callback: this.actionItemClick
                    }
                ],
                actionSheetCheckboxItem: [
                    {
                        title: '微信',
                        icon: require('../assets/weixin.png'),
                        checked: true,
                        value: 'wechat',
                        callback: this.actionItemClick
                    },
                    {
                        title: '朋友圈',
                        icon: require('../assets/weixin-circle.png'),
                        value: 'group',
                        callback: this.actionItemClick
                    },
                    {
                        title: '同事圈',
                        icon: require('../assets/colleague-circle.png'),
                        value: 'favorite',
                        callback: this.actionItemClick
                    },
                    {
                        title: '同事',
                        checked: true,
                        value: 'upload',
                        icon: require('../assets/colleague.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: 'QQ',
                        icon: require('../assets/qq.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: 'QQ空间',
                        icon: require('../assets/qq-circle.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '短信',
                        icon: require('../assets/short-message.png'),
                        callback: this.actionItemClick
                    },
                    {
                        title: '微博',
                        icon: require('../assets/weibo.png'),
                        callback: this.actionItemClick
                    }
                ],
                showActionPanel: false,
                showActionList: false,
                showActionCheckbox: false
            }
        },
        created () {
            console.log('action sheet demo loaded')
        },
        methods: {
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
        }
    }

</script>

<style lang="less">

</style>
