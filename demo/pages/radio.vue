<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">单选框 Radio</h3>
            <p>YunUI提供统一的单选框，可以满足无默认及默认勾选场景</p>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <div>
                        <y-radio :radioList="radioList"></y-radio>
                    </div>
                </y-form>
            </div>
            <div class="row clearContentPadding">
                <y-form>
                    <div>
                        <y-radio :radioList="radioList2"></y-radio>
                    </div>
                </y-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'y-radio-demo',
        data () {
            return {
                radioList: [
                    {
                        label: '单选框',
                        value: '1',
                        name: 'radio'
                    },
                    {
                        label: '单选框',
                        value: '1',
                        name: 'radio'
                    },
                    {
                        label: '单选框',
                        value: '1',
                        name: 'radio'
                    }
                ],
                radioList2: [
                    {
                        label: '单选框 默认勾选',
                        checked: true,
                        value: '1',
                        name: 'radio2'
                    },
                    {
                        label: '单选框',
                        value: '1',
                        name: 'radio2'
                    },
                    {
                        label: '单选框',
                        value: '1',
                        name: 'radio2'
                    }
                ]
            }
        },
        created () {
            console.log('radio demo loaded')
        },
        methods: {}
    }

</script>

<style lang="less" scoped>
    .row{
        padding:0 0 8px !important;
        margin-bottom:0;
    }
</style>
