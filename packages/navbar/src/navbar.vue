<template>
    <div
        :class="[UIName+'-navbar', {'is-fixed':fixed}]"
        :fixed="fixed"
    >
        <slot></slot>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-navbar',
        mixins: [UIName],
        props: {
            fixed: Boolean,
            value:{}
        },
        methods: {},
        events:{
            input(data){
                console.log(data)
            }
        },
        created(){
            this.$on('input',(data)=> {
                console.log(this.value)
            })
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/base";
    @import "../../style/stylesheets/navbar";
</style>
