<template>
    <div :class="UIName+'-action-sheet'">
        <div :class="UIName+'-mask'"></div>
        <div :class="UIName+'-action-sheet-container'"  v-if="type == 'panel'">
                <!--分享面板型-->
            <div :class="UIName+'-action-sheet-panel'">
                <div :class="UIName+'-action-sheet-title'" v-text="PanelTitle"></div>
                <div :class="UIName+'-action-sheet-content'">
                    <!--TODO repeat item 的逻辑需要补充-->
                    <div :class="UIName+'-action-sheet-item'">
                        <div :class="UIName+'-action-sheet-image'">
                            <slot name="image"></slot>
                        </div>
                        <div :class="UIName+'-action-sheet-item-name'" v-text="actionSheetItemName"></div>
                    </div>
                </div>
            </div>
            <button :class="UIName+'-action-sheet-button'">取消</button>
        </div>
            <!--操作列表型-->
        <div :class="UIName+'-action-sheet-container'" v-if="type == 'list'">
            <div :class="UIName+'-action-sheet-list'">
                <!--TODO 这里需要repeat-->
                <div :class="[UIName+'-action-sheet-list-item',UIName+'-border',UIName+'-border-b']">
                    <slot name="listIcon"></slot>
                    <span v-text="listTitle"></span>
                </div>
            </div>
            <button :class="UIName+'-action-sheet-button'">取消</button>
        </div>
            <!--表单型-->
        <div :class="UIName+'-action-sheet-container'"  v-if="type =='checkbox'">
            <div :class="UIName+'-action-sheet-checkbox'">
                <div :class="UIName+'-action-sheet-header'">
                    <span class="iconfont icon-close"></span>
                    <a :class="UIName+'-action-sheet-checkbox-commit'" href="#">确定</a>
                </div>
                <div :class="UIName+'-action-sheet-checkbox-list'">
                    <!--TODO 这里需要repeat-->
                    <div :class="[UIName+'-action-sheet-checkbox-item',UIName+'-border',UIName+'-border-b']">
                        <div :class="UIName+'-action-sheet-checkbox-label'">
                            <slot name="checkboxListIcon"></slot>
                            <span  v-text="label"></span>
                        </div>
                        <yun-checkbox></yun-checkbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import yunCheckbox from 'packages/checkbox'
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-action-sheet',
        mixins: [UIName],
        props: {
            PanelTitle: String,
            image: String,
            actionSheetItemName: String,
            listTitle: String,
            listIcon: String,
            checkboxListIcon: String,
            label: String,
            type: String
        },
        methods: {
        },
        components: {
            yunCheckbox
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/actionSheet";
</style>
