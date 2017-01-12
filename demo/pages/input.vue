<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">单行输入框 Input</h3>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <y-input label="单行输入框" placeholder="单行输入框"></y-input>
                    <y-input label="输入框 有默认值" placeholder="单行输入框" defaultValue="默认值"></y-input>
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-input-demo',
        props: {},
        created () {
            console.log('input demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
