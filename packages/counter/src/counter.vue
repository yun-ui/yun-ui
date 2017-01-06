<template>
    <div :class="UIName+'-counter'">
        <span :class="[UIName + '-counter-icon' ,'iconfont' ,'icon-delete-block',{ 'is-disabled': min >= initValue }]"
              @click="minus"></span>
        <span :class="UIName + '-counter-number'">{{ initValue }}</span>
        <span :class="[UIName + '-counter-icon','iconfont', 'icon-add-block',{ 'is-disabled': max <= initValue }]"
              @click="increase"></span>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-counter',
        mixins: [UIName],
        data () {
            return {
                initValue: this.counterValue
            }
        },
        props: {
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
                this.$emit('change', this.initValue)
            },
            increase: function () {
                if (this.initValue + this.step <= this.max) {
                    this.initValue += this.step
                } else {
                    this.initValue = this.max
                }
                this.$emit('change', this.initValue)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/counter";
</style>
