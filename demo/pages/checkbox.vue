<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">复选框 Checkbox</h3>
            <p> YunUI提供统一的复选框，可以使用在多选场景</p>
        </div>
        <div class="content form">
            <div class="row clearContentPadding">
                <y-form>
                    <div>
                        <y-checkbox :checkboxList="checkList" v-model="checkedList"></y-checkbox>
                    </div>
                </y-form>
            </div>
            <div class="row clearContentPadding">
                <y-form>
                    <div>
                        <y-checkbox :checkboxList="checkList1" v-model="checkedList1"></y-checkbox>
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
                        label: '文本',
                        checked: false,
                        value: '1'
                    },
                    {
                        label: '文本',
                        checked: false,
                        value: '2'
                    }
                ],
                checkList1: [
                    {
                        label: '文本',
                        secondaryText: '辅助文本',
                        checked: false,
                        value: '1'
                    },
                    {
                        label: '文本',
                        secondaryText: '辅助文本',
                        checked: false,
                        value: '2'
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
