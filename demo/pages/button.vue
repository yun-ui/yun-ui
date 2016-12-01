<template>
    <div>
        <div class="title">
            <h3>常用按钮</h3>
            <p>我们提供常用的按钮以便统一体验。</p>
        </div>
        <div class="content">
            <yun-button type="normal">默认按钮</yun-button>
            <yun-button type="linear">线性按钮</yun-button>
            <yun-button disabled>禁用按钮</yun-button>
            <yun-button size="large">large 撑满按钮</yun-button>
            <yun-button size="middle">middle 中等按钮</yun-button>
            <yun-button size="small">small 小按钮</yun-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'yun-button-demo',
        props: {},
        created () {
            console.log('button demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">
    .title{
        padding:0.6rem;
        p{
            margin-top: 0.2rem;
        }
    }
    .content{
        padding:0 0.24rem;
        button{
            margin-bottom: 0.16rem;
        }
    }
</style>
