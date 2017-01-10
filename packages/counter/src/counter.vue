<template>
    <div :class="[UIName+'-form-item', UIName+'-counter-item', {'error': error}]">
        <div :class="UIName + '-form-title'">
            <span v-text="label"></span>
        </div>
        <div :class="UIName+'-counter'">
        <span :class="[UIName + '-counter-icon' ,'iconfont' ,'icon-delete-block',{ 'is-disabled': min >= initValue }]"
              @click="minus"></span>
            <span :class="UIName + '-counter-number'">{{ initValue }}</span>
            <span :class="[UIName + '-counter-icon','iconfont', 'icon-add-block',{ 'is-disabled': max <= initValue }]"
                  @click="increase"></span>
        </div>
    </div>
</template>

<script>
    if (process.env === 'production') {
        require('yun-ui/counter/index.css')
    }
    /**
     * @param label {string} 显示的表单名称
     * @param min {number} 计数器可达到的最小值，默认为负无穷大
     * @param max {number} 计数器可达到的最大值，默认为正无穷大
     * @param counterValue {number} 计数器初始值，默认为0
     * @param step {number} 计数器一次加减变化的值，默认为1
     * @function change {function} 每次点击加减后的回调，输出变化后的值
     */
    import {UIName} from 'mixins'
    export default {
        name: 'y-counter',
        mixins: [UIName],
        data () {
            return {
                initValue: this.counterValue
            }
        },
        props: {
            label: String,
            error: {
                type: Boolean,
                default: false
            },
            counterValue: {
                type: Number,
                default: 0
            },
            min: {
                type: Number,
                default: -Infinity
            },
            max: {
                type: Number,
                default: Infinity
            },
            step: {
                type: Number,
                default: 1
            }
        },
        methods: {
            minus: function () {
                if (this.initValue - this.step >= this.min) {
                    this.initValue -= this.step
                } else {
                    this.initValue = this.min
                }
                this.$emit('change', this.initValue, this.label)
                this.$parent && this.$parent.$emit('change', this.initValue, this.label)
            },
            increase: function () {
                if (this.initValue + this.step <= this.max) {
                    this.initValue += this.step
                } else {
                    this.initValue = this.max
                }
                this.$emit('change', this.initValue, this.label)
                this.$parent && this.$parent.$emit('change', this.initValue, this.label)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/counter";
</style>
