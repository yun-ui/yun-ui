<template>
    <div>
        <div v-for="radio in radioList" :class="[UIName+'-form-item', UIName+'-radio-item', {'error': radio.error}]">
            <div :class="UIName + '-form-title'">
                <span v-text="radio.label"></span>
            </div>
            <div :class="UIName+'-radio'">
                <input :class="UIName+'-radio-input'" :name="radio.name" type="radio" :checked="radio.checked"
                       @change="change($event,radio)"/>
                <div :class="UIName+'-radio-inner'">
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
                this.$emit('change', e.target.checked, radio.label)
                this.$parent && this.$parent.$emit('change', e.target.checked, radio.label)
            }
        }
    }

</script>
