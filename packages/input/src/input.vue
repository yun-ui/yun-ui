<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', {'error': error}]">
        <label :class="UIName + '-input-label'">
            <span v-text="label"></span>
        </label>
        <div :class="[UIName + '-input-control']">
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
            placeholder: String,
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
        watch: {
            value () {
                this.$emit('change', this.value, this.label)
                this.$parent && this.$parent.$emit('change', this.value, this.label)
            }
        }
    }

</script>
