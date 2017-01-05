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
    // 1. 默认 e1显示 e2,e4,e5不显示 e3的placeholder没有值
    // 2. 点击e1后 e2,e5显示 e3 placeholder有值
    // 3. e4在输入框点击输入后显示，作用是点击后reset输入值
    import {UIName} from 'mixins'
    export default {
        name: 'yun-search',
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
