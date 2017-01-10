<template>
    <div :class="UIName+'-action-sheet'" v-show="show">

        <div :class="UIName+'-mask'" @click="$emit('maskClicked')"></div>

        <div :class="UIName+'-action-sheet-container'" v-if="type == 'panel'">
            <!--分享面板型-->
            <div :class="UIName+'-action-sheet-panel'">
                <div :class="UIName+'-action-sheet-title'" v-text="panelTitle"></div>
                <div :class="UIName+'-action-sheet-content'">
                    <div :class="UIName+'-action-sheet-item'" v-for="item in actionSheetItem" @click="item.callback">
                        <div :class="UIName+'-action-sheet-image'">
                            <img :src="item.icon">
                        </div>
                        <div :class="UIName+'-action-sheet-item-name'" v-text="item.title"></div>
                    </div>
                </div>
            </div>
            <button :class="UIName+'-action-sheet-button'" @click="$emit('cancel')">取消</button>
        </div>

        <!--操作列表型-->
        <div :class="UIName+'-action-sheet-container'" v-if="type == 'list'">
            <div :class="UIName+'-action-sheet-list'">
                <div :class="[UIName+'-action-sheet-list-item',UIName+'-border',UIName+'-border-b']"
                     v-for="item in actionSheetItem" @click="item.callback">
                    <img :class="UIName+'-action-sheet-icon'" :src="item.icon">
                    <span :class="UIName+'-action-sheet-list-title'" v-text="item.title"></span>
                </div>
            </div>
            <button :class="UIName+'-action-sheet-button'" @click="$emit('cancel')">取消</button>
        </div>

        <!--表单型-->
        <div :class="UIName+'-action-sheet-container'" v-if="type =='checkbox'">
            <div :class="UIName+'-action-sheet-checkbox'">
                <div :class="UIName+'-action-sheet-header'">
                    <span class="iconfont icon-close" @click="$emit('cancel')"></span>
                    <a :class="UIName+'-action-sheet-checkbox-commit'" @click="$emit('confirm')">确定</a>
                </div>
                <div :class="UIName+'-action-sheet-checkbox-list'">
                    <div :class="[UIName+'-action-sheet-checkbox-item',UIName+'-border',UIName+'-border-b']"
                         v-for="item in actionSheetItem" @click="item.callback">
                        <div :class="UIName+'-action-sheet-checkbox-label'">
                            <img :class="UIName+'-action-sheet-icon'" :src="item.icon">
                            <span v-text="item.title"></span>
                        </div>
                        <yun-checkbox :value="item.value" :checked="item.checked"
                                      @change="checkboxChange"></yun-checkbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    if (process.env === 'production') {
        require('yun-ui/actionSheet/index.css')
    }
    /**
     * @param type {string} action sheet的类型，有panel，list，checkbox类型
     * @param panelTitle {string} type为panel类型时的面板标题
     * @param actionSheetItem {array} action sheet各项，数组中为object类型
     * @actionSheetItem * {object} action sheet的列表项
     * @actionSheetItem:title {string} 列表项的标题
     * @actionSheetItem:icon {string} 列表项的图标，传入图片
     * @actionSheetItem callback {function} 点击列表项后的事件回调
     * @actionSheetItem:value {string} checkbox的值
     * @actionSheetItem checked {boolean} checkbox的默认勾选状态
     * @param show {boolean} action sheet的显隐状态
     * @function maskClicked {function} 点击蒙层的事件回调
     * @function cancel {function} 点击取消按钮的事件回调
     * @function confirm {function} 点击确定按钮的事件回调
     */
    import yunCheckbox from 'packages/checkbox'
    import {UIName} from 'mixins'
    export default {
        name: 'y-action-sheet',
        mixins: [UIName],
        props: {
            type: String,
            panelTitle: String,
            actionSheetItem: Array,
            checked: {
                type: Boolean,
                default: false
            },
            value: {
                type: String,
                default: ''
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            checkboxChange: function (value, status) {
                this.$emit('change', value, status)
            }
        },
        components: {
            yunCheckbox
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/actionSheet";
</style>
