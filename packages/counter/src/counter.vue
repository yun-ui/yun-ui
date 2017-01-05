<template>
    <div :class="UIName+'-counter'">
        <span :class="[UIName + '-counter-icon' ,'iconfont' ,'icon-delete-block',{ 'is-disabled': min > defaultValue - step }]"
              @click="minus"></span>
        <span :class="UIName + '-counter-number'">{{ defaultValue }}</span>
        <span :class="[UIName + '-counter-icon','iconfont', 'icon-add-block',{ 'is-disabled': max < defaultValue + step}]"
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
                defaultValue: this.value
            }
        },
        props: {
            value: {
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
                if (this.defaultValue - this.step >= this.min) {
                    this.defaultValue -= this.step
                }
                this.$emit('change', this.defaultValue)
            },
            increase: function () {
                if (this.defaultValue + this.step <= this.max) {
                    this.defaultValue += this.step
                }
                this.$emit('change', this.defaultValue)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/counter";
</style>
