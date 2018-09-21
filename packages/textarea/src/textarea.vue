<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', UIName+'-textarea-item', {'error': error}]">
        <div :class="[UIName + '-input-control']">
            <textarea :placeholder="placeholder" v-model="value" class="input-textarea-content"></textarea>
            <div class="textarea-count" v-if="limit">
                {{ number }}/{{ limit }}
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-textarea',
        mixins: [UIName],
        props: {
            label: String,
            defaultValue: String,
            limit: Number,
            placeholder: String,
            error: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                value: this.defaultValue || ''
            }
        },

        computed: {
            number () {
                return this.value.length
            }
        },

        watch: {
            defaultValue (val) {
                if (val !== this.value) {
                    this.value = val
                }
            },
            value (afterValue) {
                if (afterValue.length > this.limit) {
                    this.value = afterValue.slice(0, this.limit)
                }
                this.$emit('input', this.value)
                this.$emit('change', this.value, this.label)
                this.$parent && this.$parent.$emit('change', this.value, this.label)
            }
        },
        methods: {}
    }

</script>


<style lang="less" rel="stylesheet/less" scoped>
    .textarea-count{
        color: rgb(118, 136, 147);
        padding-bottom: 15px;
        text-align: right;
    }
</style>
