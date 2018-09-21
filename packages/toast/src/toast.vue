<template>
    <div :class="UIName+'-toast'">
        <div :class="[UIName+'-toast-container', {'toast-border-radius': !icon}, {'waiting-width': !content}, {'is-loading-bottom': position && position === 'bottom'}]">
            <div :class="[UIName+'-toast-icon', {'waiting-icon': icon === 'waiting'}]" v-if="icon">
                <img src="../../assets/success.png" alt="" v-if="icon === 'success'">
                <img src="../../assets/waiting.gif" alt="" v-if="icon === 'waiting'">
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
