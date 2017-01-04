<template>
    <div :class="[UIName+'-cell-item', UIName+'-input-item']">
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
            placeholder: String
        },
        methods: {}
    }

</script>
