<style scoped>
    @import "../../style/font/iconfont.css";
    .y-icon{
        font-size: 24px;
        vertical-align: middle;
        display: inline-block;
    }
</style>

<template>
    <tap :class="getCssCls()" :style="style" @tap="tap">
    </tap>
</template>

<script>
import tap from '../../tap'
import {UIName} from 'mixins'

export default {
    name: 'y-icon',
    mixins: [UIName],
    components: {
        tap: tap
    },
    props: {
        // 按钮类型，可为空或submit
        'type': {
            default: ''
        },
        // 自定义样式，作用于组件的容器上
        'style': String,
        // 自定义class，作用于组件的容器上
        'class': String
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
            var cls = [ 'y-icon', 'iconfont' ]

            // 按钮type的class
            if (this.type) cls.push('icon-' + this.type)

            // active时的class
            if (this.active) cls.push('active')

            // 传入的自定义class
            if (this['class']) cls.push(this['class'])

            return cls.join(' ')
        },
        // 触发点击事件
        tap: function () {
            this.$emit('tap')
        }
    }
}
</script>