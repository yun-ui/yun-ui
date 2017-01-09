<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', UIName+'-textarea-item', {'error': error}]">
        <div :class="[UIName + '-input-control']">
            <textarea :placeholder="placeholder" v-model="words"></textarea>
            <div :class="[UIName + '-textarea-count']">
                {{ number }}/{{ limit }}
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-textarea-item',
        mixins: [UIName],
        props: {
            label: String,
            limit: {
                type: Number,
                default: 200
            },
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
            }
        },
        methods: {}
    }

</script>
