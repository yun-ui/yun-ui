<template>
    <div :class="UIName+'-toast'">
        <div :class="[UIName+'-toast-container', {'is-loading-bottom': position && position === 'bottom'}]">
            <div :class="UIName+'-toast-icon'" v-if="icon === 'success'">
                <img src="../../../src/assets/success.png" alt="">
            </div>
            <div :class="UIName+'-toast-content'"
                 v-text="content" v-if="content || $slots.content"></div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-toast',
        mixins: [UIName]
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/toast";
</style>
