<template>
    <div :class="[UIName+'-cell-item', UIName+'-radio-item']">
        <div :class="UIName + '-cell-title'">
            <span v-text="label"></span>
        </div>
        <div :class="UIName+'-radio'">
            <input :class="UIName+'-radio-input'" name="radio" type="radio"/>
            <div :class="UIName+'-radio-inner'">
                <i class="iconfont icon-true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'yun-radio-item',
        mixins: [UIName],
        props: {
            label: String
        },
        methods: {}
    }

</script>
