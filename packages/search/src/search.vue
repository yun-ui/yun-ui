<template>
    <div :class="UIName + '-search'">
        <div :class="UIName + '-searchbar'">
            <div :class="UIName + '-input-wrap'">
                <i :class="UIName + '-search-icon'" class="iconfont icon-search"></i>
                <input type="text" :class="[UIName + '-search-input', {'input-text': inputValue}]" :placeholder="placeholderVal"
                    @blur="isFocus=false" @focus="isFocus=true" v-model="inputValue"/>
                <i :class="UIName + '-search-reset'" class="iconfont icon-close-block" v-show="isFocus || inputValue"
                   @click.stop="resetSearch"></i>
            </div>
            <span :class="[UIName + '-text-theme', UIName + '-search-cancel',{'input-text': inputValue}]" v-show="isFocus || inputValue && operation" @click="operate">{{ operation }}</span>
        </div>
        <div :class="UIName + '-search-result'"></div>
    </div>
</template>
 
<script>
    /**
     * @param text {string} 搜索框初始状态时的提示文字
     * @param operation {string} 搜索框操作文案
     * @param placeholder {string} 聚焦时搜索输入框内的提示文字
     * @function search {function} 搜索输入时的回调，输出值为用户当前的输入内容
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-search',
        mixins: [UIName],
        props: {
            text: String,
            operation: String,
            placeholder: String,
            value: String
        },
        data: function () {
            return {
                isFocus: false,
                inputValue: ''
            }
        },
        watch: {
            value () {
                this.inputValue = this.value
            },
            inputValue (val) {
                this.$emit('input', val)
            }
        },
        mounted () {
            this.inputValue = this.value
        },
        computed: {
            placeholderVal () {
                if (this.isFocus) {
                    return this.placeholder
                } else {
                    return this.text
                }
            }
        },
        methods: {
            handleClick () {
                this.$el.querySelector('input').focus()
            },
            operate () {
                this.$emit('operate')
            },
            resetSearch () {
                let that = this
                if (that.inputValue) {
                    this.inputValue = ''
                    this.$el.querySelector('input').focus()
                }
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/search";
</style>