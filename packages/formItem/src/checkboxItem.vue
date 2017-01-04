<template>
    <div :class="[UIName+'-cell-item', UIName+'-checkbox-item']">
        <yun-checkbox></yun-checkbox>
        <div :class="UIName + '-cell-title'">
            <span v-text="label"></span>
        </div>
    </div>
</template>

<script>
    import yunCheckbox from 'packages/checkbox'
    import {UIName} from 'mixins'
    export default {
        name: 'yun-checkbox-item',
        mixins: [UIName],
        props: {
            label: String
        },
        methods: {},
        components: {
            yunCheckbox
        }
    }

</script>
