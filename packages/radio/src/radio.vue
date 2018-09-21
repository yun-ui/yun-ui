<template>
    <div>
        <div v-for="radio in radioList" :class="[UIName+'-form-item', UIName+'-radio-item', {'error': radio.error},{'radio-height': radio.secondaryText}]">
            <div :class="UIName + '-form-title'">
                <div v-text="radio.label"></div>
                <div v-if="radio.secondaryText" v-text="radio.secondaryText" class="radio-secondaryText"></div>
            </div>
            <div :class="UIName+'-radio'">
                <input :class="UIName+'-radio-input'" :name="radio.name" type="radio" :checked="radio.checked"
                       @change="change($event,radio)"/>
                <div :class="[UIName+'-radio-inner', {'radio-position' : radio.secondaryText}]">
                    <i class="iconfont icon-true"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-radio',
        mixins: [UIName],
        props: {
            radioList: Array,
            secondaryText: String,
            label: String,
            name: String,
            checked: Boolean,
            error: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                value: ''
            }
        },
        methods: {
            change (e, radio) {
                this.value = radio.value
                this.$emit('input', this.value)
                this.$emit('change', e.target.checked, radio.value !== undefined ? radio.value : radio.label, radio.label)
                this.$parent && this.$parent.$emit('change', e.target.checked, radio.value !== undefined ? radio.value : radio.label, radio.label)
            }
        }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
    .radio-height {
        padding: 12px;
        height: auto;
    }
    .radio-secondaryText{
        color: #768893;
        font-size: 14px;
    }
    .radio-position {
        height: 64px;
        line-height: 64px;
    }
</style>