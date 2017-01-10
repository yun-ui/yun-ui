<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">状态页 State Page</h3>
            <p>YunUI 提供了一套统一的状态页，用于返回浏览网页时出现的各种状态。</p>
            <p>提供的基础状态页主要有：<strong>服务器异常、网络异常、无数据缺省、
                操作成功、操作失败、操作等待。</strong></p>
        </div>
        <div class="content statePage-button-container">
            <y-button type="linear" @click.native="goToPage('statePage1')">服务器异常</y-button>
            <y-button type="linear" @click.native="goToPage('statePage2')">网络异常</y-button>
            <y-button type="linear" @click.native="goToPage('statePage3')">无数据缺省</y-button>
            <y-button type="linear" @click.native="goToPage('statePage4')">操作成功</y-button>
            <y-button type="linear" @click.native="goToPage('statePage5')">操作失败</y-button>
            <y-button type="linear" @click.native="goToPage('statePage6')">操作等待</y-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-statePage-demo',
        props: {},
        created () {
            console.log('state page demo loaded')
        },
        methods: {
            goToPage: function (path) {
                this.$router.push({
                    path: '/statePage/' + path
                })
            }
        }
    }

</script>

<style lang="less">

</style>
