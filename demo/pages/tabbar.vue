<template>
    <div>
        <div class="tabbar-intro">底部导航 Tabbar</div>
        <y-tabbar @change="tabChange" defaultActiveTabId="1">
            <y-tab-item title="文本" tabId="1"><i class="iconfont icon-normal-icon" slot="icon"></i></y-tab-item>
            <y-tab-item title="文本" tabId="2"><i class="iconfont icon-normal-icon" slot="icon"></i></y-tab-item>
            <y-tab-item title="文本" tabId="3"><i class="iconfont icon-normal-icon" slot="icon"></i></y-tab-item>
            <y-tab-item title="文本" tabId="4"><i class="iconfont icon-normal-icon" slot="icon"></i></y-tab-item>
        </y-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'y-tabbar-demo',
        props: {},
        created () {
            console.log('tabbar demo loaded')
        },
        methods: {
            tabChange: function (tabId) {
                console.log(tabId)
            }
        }
    }

</script>

<style lang="css" scoped>
  .tabbar-intro {
     position: relative;
     top: 32px;
     left: 12px;
     font-size: 16px;
     line-height: 21px;
     color: #5E5E5E;
  }
</style>
