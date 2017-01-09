<template>
    <div :class="[UIName+'-form-item', UIName+'-input-item', {'error': error}]">
        <label :class="UIName + '-input-label'">
            <span v-text="label"></span>
        </label>
        <div :class="[UIName + '-input-control']">
            <input type="text" :placeholder="placeholder"/>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-input-item',
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
