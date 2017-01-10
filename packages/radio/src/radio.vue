<template>
    <div :class="[UIName+'-form-item', UIName+'-radio-item', {'error': error}]">
        <div :class="UIName + '-form-title'">
            <span v-text="label"></span>
        </div>
        <div :class="UIName+'-radio'">
            <input :class="UIName+'-radio-input'" :name="name" type="radio" :checked="checked" @change="change"/>
            <div :class="UIName+'-radio-inner'">
                <i class="iconfont icon-true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-radio',
        mixins: [UIName],
        props: {
            label: String,
            name: String,
            checked: Boolean,
            error: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            change (e) {
                this.$emit('change', e.target.checked, this.label)
                this.$parent && this.$parent.$emit('change', e.target.checked, this.label)
            }
        }
    }

</script>
