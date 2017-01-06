<template>
    <div :class="[UIName+'-form-item', UIName+'-counter-item']">
        <div :class="UIName + '-form-title'">
            <span v-text="label"></span>
        </div>
        <yun-counter
                :min="min" :max="max" :counterValue="counterValue" :step="step" @change="change"
        ></yun-counter>
    </div>
</template>

<script>
    /**
     * @param label {string} 显示的表单名称
     * @param min {number} 计数器可达到的最小值，默认为负无穷大
     * @param max {number} 计数器可达到的最大值，默认为正无穷大
     * @param counterValue {number} 计数器初始值，默认为0
     * @param step {number} 计数器一次加减变化的值，默认为1
     * @function change {function} 每次点击加减后的回调，输出变化后的值
     */
    import yunCounter from 'packages/counter'
    import {UIName} from 'mixins'
    export default {
        name: 'yun-counter-item',
        mixins: [UIName],
        props: {
            label: String,
            min: Number,
            max: Number,
            counterValue: Number,
            step: Number
        },
        methods: {
            change: function (value) {
                this.$parent.$emit('change', value)
            }
        },
        components: {
            yunCounter
        }
    }

</script>
