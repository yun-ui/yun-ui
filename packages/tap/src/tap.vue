<style scoped>
    .y-tap{
        opacity: 1;
    }
    .y-tap.active{
        opacity: .7;
    }
</style>

<template>
    <div :class="getCssCls()" :style="style" 
        @click="tap" @touchstart="active = !disabled" @touchend="active = false">
        <slot></slot>
    </div>
</template>

<script>
import {UIName} from 'mixins'

export default {
    name: 'y-tap',
    mixins: [UIName],
    props: {
        // 自定义样式，作用于组件的容器上
        'style': String,
        // 自定义class，作用于组件的容器上
        'class': String,
        // 是否不可用
        'disabled': Boolean
    },
    data: function () {
        return {
            // 是否按下状态
            active: false
        }
    },
    methods: {
        // 动态计算按钮的 class
        getCssCls: function () {
            var cls = ['y-tap']

            // active时的class
            if (this.active) cls.push('active')

            // 传入的自定义class
            if (this['class']) cls.push(this['class'])

            return cls.join(' ')
        },
        // 触发点击事件
        tap: function () {
            if (!this.disabled) {
                this.$emit('tap')
            }
        }
    }
}
</script>