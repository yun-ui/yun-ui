<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">提示 Toast</h3>
            <p>YunUI 提供了多种提示样式</p>
        </div>
        <div class="content button-container">
            <y-button type="linear" @click="showToastPicture">操作成功-图文</y-button>
            <y-button type="linear" @click="showToastText">操作成功-文本</y-button>
            <y-button type="linear" @click="showToastLoadingPic">操作等待-图</y-button>
            <y-button type="linear" @click="showToastLoadingText">操作等待-图文</y-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-toast-demo',
        props: {},
        data: function () {
            return {}
        },
        created () {
            console.log('button demo loaded')
        },
        methods: {
            showToastPicture: function () {
                this.$toast({
                    content: '操作成功',
                    icon: 'success'
                })
            },
            showToastText: function () {
                this.$toast({
                    content: '正在同步人员数据'
                })
            },
            showToastLoadingPic: function () {
                this.$toast({
                    icon: 'waiting',
                    content: ''
                })
            },
            showToastLoadingText: function () {
                this.$toast({
                    icon: 'waiting',
                    content: '正在同步人员数据'
                })
            }
        }
    }

</script>

<style lang="less">

</style>
