<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">单行输入框 Input</h3>
            <p>YunUI提供统一单行输入框。</p>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <y-input label="单行输入框" placeholder="单行输入框" v-model="input0"></y-input>
                    <p>内容:{{input0}}</p>
                    <y-input label="输入框 有默认值" placeholder="单行输入框" defaultValue="默认值" v-model="input1"></y-input>
                    <p>内容:{{input1}}</p>
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-input-demo',
        data () {
            return {
                input0: '',
                input1: ''
            }
        },
        props: {},
        created () {
            console.log('input demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
