<template>
    <div :class="[UIName+'-cell-item', UIName+'-switch-item']">
        <div :class="UIName + '-cell-title'">
            <span v-text="label"></span>
        </div>
        <yun-switch :checked="checked" @change="change"></yun-switch>
    </div>
</template>

<script>
    /**
     * @param label {string} 显示的表单名称
     * @param checked {boolean} 开关初始的状态
     * @function change {function} 切换开关后的回调，输出切换后的开关boolean值
     */
    import yunSwitch from 'packages/switch'
    import {UIName} from 'mixins'
    export default {
        name: 'yun-switch-item',
        mixins: [UIName],
        props: {
            label: String,
            checked: Boolean
        },
        methods: {
            change: function (value) {
                this.$parent.$emit('change', value)
            }
        },
        components: {
            yunSwitch
        }
    }

</script>
