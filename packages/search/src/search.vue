<template>
    <div :class="UIName + '-search'">
        <div :class="UIName + '-searchbar'">
            <div :class="UIName + '-input-wrap'">
                <div :class="UIName + '-input-ph'" v-show="showPH" @click="handleClick">
                    <i class="iconfont icon-search"></i>
                    <span>{{ text }}</span>
                </div>
                <i :class="UIName + '-search-icon'" class="iconfont icon-search" v-show="!showPH"></i>
                <input type="text" :class="UIName + '-search-input'" :placeholder="!showPH ? placeholder : ''"
                       @blur="handleBlur" v-model="inputValue"/>
                <i :class="UIName + '-search-reset'" class="iconfont icon-close-block" v-show="!showPH"
                   @click="resetSearch"></i>
            </div>
            <span :class="[UIName + '-text-theme', UIName + '-search-cancel']" v-show="!showPH">{{ text }}</span>
        </div>
        <div :class="UIName + '-search-result'"></div>
    </div>
</template>

<script>
    /**
     * @param text {string} 搜索框初始状态时的提示文字
     * @param placeholder {string} 聚焦时搜索输入框内的提示文字
     * @function search {function} 搜索输入时的回调，输出值为用户当前的输入内容
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-search',
        mixins: [UIName],
        props: {
            text: String,
            placeholder: String
        },
        data: function () {
            return {
                showPH: true,
                inputValue: ''
            }
        },
        watch: {
            inputValue (val) {
                this.$emit('search', val)
            }
        },
        methods: {
            handleClick () {
                this.showPH = false
                this.$el.querySelector('input').focus()
            },
            handleBlur () {
                if (!this.inputValue) {
                    this.showPH = true
                }
            },
            resetSearch () {
                this.inputValue = ''
                this.$el.querySelector('input').focus()
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/search";
</style>
