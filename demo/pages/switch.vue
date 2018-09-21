<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">开关 Switch</h3>
            <p>YunUI提供统一的开关，可以满足无默认及默认列表开关场景</p>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <y-switch label="关闭"></y-switch>
                    <y-switch label="开启" checked></y-switch>
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-switch-demo',
        data () {
            return {
                value: true
            }
        },
        created () {
            console.log('switch demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
