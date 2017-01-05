<template>
    <div :class="UIName+'-action-sheet'">
        <div :class="UIName+'-mask'"></div>
        <div :class="UIName+'-action-sheet-container'">
            <!--分享面板型-->

            <!--<div :class="UIName+'-action-sheet-panel'">-->
                <!--<div :class="UIName+'-action-sheet-title'" v-text="PanelTitle"></div>-->
                <!--<div :class="UIName+'-action-sheet-content'">-->
                    <!--&lt;!&ndash;TODO repeat item 的逻辑需要补充&ndash;&gt;-->
                    <!--<div :class="UIName+'-action-sheet-item'">-->
                        <!--<div :class="UIName+'-action-sheet-image'">-->
                            <!--<slot name="actionSheetItemImage"></slot>-->
                        <!--</div>-->
                        <!--<div :class="UIName+'-menu-item-name'" v-text="actionSheetItemName"></div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<button :class="UIName+'-action-sheet-button'">取消</button>-->

            <!--操作列表型-->

            <!--<div :class="UIName+'-action-sheet-list'">-->
                <!--&lt;!&ndash;TODO 这里需要repeat&ndash;&gt;-->
                <!--<div :class="[UIName+'-action-sheet-list-item',UIName+'-border',UIName+'-border-b']">-->
                    <!--<slot name="listIcon"></slot>-->
                    <!--<span v-text="listTitle"></span>-->
                <!--</div>-->
                <!--<div :class="[UIName+'-action-sheet-list-item',UIName+'-border',UIName+'-border-b']">-->
                    <!--<slot name="listIcon"></slot>-->
                    <!--<span v-text="listTitle"></span>-->
                <!--</div>-->
                <!--<div :class="[UIName+'-action-sheet-list-item',UIName+'-border',UIName+'-border-b']">-->
                    <!--<slot name="listIcon"></slot>-->
                    <!--<span v-text="listTitle"></span>-->
                <!--</div>-->
            <!--</div>-->
            <!--<button :class="UIName+'-action-sheet-button'">取消</button>-->

            <!--表单型-->
            <div></div>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-action-sheet',
        mixins: [UIName],
        props: {
            PanelTitle: String,
            // TODO
            actionSheetItemImage: String,
            actionSheetItemName: String,
            listTitle: String,
            listIcon: String
        },
        methods: {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/actionSheet";
</style>
