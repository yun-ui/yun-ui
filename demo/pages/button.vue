<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">按钮 Button</h3>
            <p>我们提供常用的按钮以便统一体验。</p>
        </div>
        <div class="content button-container">
            <y-button type="normal">常用按钮</y-button>
            <y-button type="linear">线性按钮</y-button>
            <y-button disabled>禁用状态</y-button>
            <div class="btn-middle"><y-button size="middle">中等按钮</y-button></div>
            <div class="btn-middle"><y-button size="small">小型</y-button></div>     
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-button-demo',
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less" scoped>
  .btn-middle {
    width: 100%;
    text-align: center;
    vertical-align: middle;
  }
</style>
