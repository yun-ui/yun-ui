<template>
    <div :class="UIName+'-pop-menu'">
        <div :class="UIName+'-mask'"></div>
        <div :class="UIName+'-pop-menu-container'">
            <div :class="UIName+'-pop-menu-panel'">
                <div :class="UIName+'-pop-menu-title'" v-text="popMenuTitle"></div>
                <div :class="UIName+'-pop-menu-content'">
                    <!--TODO repeat item 的逻辑需要补充-->
                    <div :class="UIName+'-pop-menu-item'">
                        <div :class="UIName+'-pop-menu-image'">
                            <slot name="menuItemImage"></slot>
                        </div>
                        <div :class="UIName+'-menu-item-name'" v-text="menuItemName"></div>
                    </div>
                </div>
            </div>
            <button :class="UIName+'-pop-menu-button'">取消</button>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-Pop-menu',
        mixins: [UIName],
        props: {
            popMenuTitle: String,
            // TODO
            menuItemImage: String,
            menuItemName: String
        },
        methods: {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/popMenu";
</style>
