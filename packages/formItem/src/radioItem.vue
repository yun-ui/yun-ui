<template>
    <div :class="[UIName+'-form-item', UIName+'-radio-item']">
        <div :class="UIName + '-form-title'">
            <span v-text="label"></span>
        </div>
        <div :class="UIName+'-radio'">
            <input :class="UIName+'-radio-input'" :name="name" type="radio"/>
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
            label: String,
            name: String
        },
        methods: {}
    }

</script>
