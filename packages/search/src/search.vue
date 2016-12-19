<template>
    <div :class="UIName + '-search'">
        <div :class="UIName + '-searchbar'">
            <div :class="UIName + '-input-wrap'">
                <div :class="UIName + '-input-ph'">
                    <i class="iconfont icon-search"></i>
                    <span>搜索</span>
                </div>
                <!--TODO 优化iconfont-->
                <i :class="UIName + '-search-icon'" class="iconfont icon-search"></i>
                <input :class="UIName + '-search-input'" type="text" placeholder="搜索" />
                <i :class="UIName + '-search-reset'" class="iconfont icon-delete-small"></i>
            </div>
            <span :class="[UIName + '-text-theme', UIName + '-search-cancel']">搜索</span>
        </div>
        <div :class="UIName + '-search-result'"></div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-search',
        mixins: [UIName],
        props: {

        },
        methods: {
            handleClick (e) {
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/search";
</style>
