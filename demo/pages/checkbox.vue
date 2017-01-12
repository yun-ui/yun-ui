<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">复选框 Checkbox</h3>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <div>
                        <y-checkbox :checkboxList="checkList"></y-checkbox>
                    </div>
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-checkbox-demo',
        data () {
            return {
                checkList: [
                    {
                        label: '复选框1',
                        checked: false,
                        value: '1'
                    },
                    {
                        label: '复选框2',
                        checked: false,
                        value: '2'
                    },
                    {
                        label: '复选框3',
                        checked: true,
                        value: '3'
                    }
                ]
            }
        },
        created () {
            console.log('checkbox demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
