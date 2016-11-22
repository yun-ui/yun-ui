<template>
    <button class="divided" :class="UIName+'-tab-item'">
        <div :class="[UIName+'-tab-item-label', {'is-active':active}]"
            @click="test"
        >
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-tabItem',
        mixins: [UIName],
        props: {
            active: Boolean
        },
        data(){
            return {
                selected: false
            }
        },
        methods: {
            test(data){
                this.$parent.$emit('input','aaaa')
                console.log("value")
                console.log(data)
            }
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
    @import "../../style/stylesheets/tabItem";
</style>
