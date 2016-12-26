<template>
    <div :class="UIName + '-search'">
        <div :class="UIName + '-searchbar'">
            <div :class="UIName + '-input-wrap'">
                <!--TODO e1-->
                <div :class="UIName + '-input-ph'" v-show="showPH" @click="showPH = !showPH">
                    <i class="iconfont icon-search"></i>
                    <span>搜索</span>
                </div>
                <!--TODO e2-->
                <i :class="UIName + '-search-icon'" class="iconfont icon-search"
                   v-show="!showPH"></i>
                <!--TODO e3-->
                <input :class="UIName + '-search-input'" placeholder="搜索" type="text" />
                <!--TODO e4-->
                <i :class="UIName + '-search-reset'" class="iconfont icon-close-block"
                    v-show="!showPH"></i>
            </div>
            <!--TODO e5-->
            <span :class="[UIName + '-text-theme', UIName + '-search-cancel']"
                v-show="!showPH">搜索</span>
        </div>
        <div :class="UIName + '-search-result'"></div>
    </div>
</template>

<script>
    // TODO search的点击交互需要优化
    // 1. 默认 e1显示 e2,e4,e5不显示 e3的placeholder没有值
    // 2. 点击e1后 e2,e5显示 e3 placeholder有值
    // 3. e4在输入框点击输入后显示，作用是点击后reset输入值
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-search',
        mixins: [UIName],
        props: {},
        data: function () {
            return {
                showPH: true
            }
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
