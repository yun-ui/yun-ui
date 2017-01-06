<template>
    <div :class="[UIName+'-form-item', UIName+'-checkbox-item']">
        <yun-checkbox :checked="checked" :value="value" @change="change"></yun-checkbox>
        <div :class="UIName + '-form-title'">
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
            label: String,
            value: String,
            checked: Boolean
        },
        methods: {
            change: function (value, status) {
                this.$parent.$emit('change', value, status)
            }
        },
        components: {
            yunCheckbox
        }
    }

</script>
