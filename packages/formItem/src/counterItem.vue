<template>
    <div :class="[UIName+'-cell-item', UIName+'-counter-item']">
        <div :class="UIName + '-cell-title'">
            <span v-text="label"></span>
        </div>
        <yun-counter></yun-counter>
    </div>
</template>

<script>
    import yunCounter from 'packages/counter'
    import {UIName} from 'mixins'
    export default {
        name: 'yun-counter-item',
        mixins: [UIName],
        props: {
            label: String
        },
        methods: {},
        components: {
            yunCounter
        }
    }

</script>
