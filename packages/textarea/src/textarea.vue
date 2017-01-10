<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', UIName+'-textarea-item', {'error': error}]">
        <div :class="[UIName + '-input-control']">
            <textarea :placeholder="placeholder" v-model="words"></textarea>
            <div :class="[UIName + '-textarea-count']" v-if="limit">
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
            limit: Number,
            placeholder: String,
            error: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                number: 0,
                words: ''
            }
        },
        watch: {
            words (afterValue) {
                if (afterValue.length > this.limit) {
                    this.words = afterValue.slice(0, this.limit)
                }
                this.number = this.words.length
                this.$emit('change', this.words, this.label)
                this.$parent && this.$parent.$emit('change', this.words, this.label)
            }
        },
        methods: {}
    }

</script>
