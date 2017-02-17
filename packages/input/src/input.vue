<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', {'error': error}]">
        <label :class="UIName + '-input-label'">
            <span v-text="label"></span>
        </label>
        <div :class="[UIName + '-input-control', {'is-align-right': align === 'right'}]">
            <input type="text" :placeholder="placeholder" v-model="value"/>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-input',
        mixins: [UIName],
        props: {
            label: String,
            defaultValue: String,
            placeholder: String,
            error: {
                type: Boolean,
                default: false
            },
            align: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                value: this.defaultValue
            }
        },
        watch: {
            value () {
                this.$emit('input', this.value)
                this.$emit('change', this.value, this.label)
                this.$parent && this.$parent.$emit('change', this.value, this.label)
            }
//            currentValue () {
//                this.value = this.currentValue;
//            }
        }
    }

</script>
