<template>
    <div :class="[UIName+'-cell-item', UIName+'-switch-item']">
        <div :class="UIName + '-cell-title'">
            <span v-text="label"></span>
        </div>
        <yun-switch></yun-switch>
    </div>
</template>

<script>
    import yunSwitch from 'packages/switch'
    import {UIName} from 'mixins'
    export default {
        name: 'yun-switch-item',
        mixins: [UIName],
        props: {
            label: String
        },
        methods: {},
        components: {
            yunSwitch
        }
    }

</script>
