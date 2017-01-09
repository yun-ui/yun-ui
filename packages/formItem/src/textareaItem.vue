<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', UIName+'-textarea-item', {'error': error}]">
        <div :class="[UIName + '-input-control']">
            <textarea :placeholder="placeholder"></textarea>
            <div :class="[UIName + '-textarea-count']">
                7/200
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
            placeholder: String,
            error: {
                type: Boolean,
                default: false
            }
        },
        methods: {}
    }

</script>
