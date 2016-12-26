<template>
    <div>

        <!--input-->
        <div :class="[UIName+'-cell-item', UIName+'-input-item']" v-if="input || $slots.input">
            <label :class="UIName + '-input-label'" v-text="label"></label>
            <div :class="[UIName + '-input-control']"><input type="text" placeholder="placeholder"/></div>
        </div>

        <!--textarea-->
        <div :class="[UIName+'-cell-item', UIName+'-input-item', UIName+'-textarea-item']" v-if="textarea || $slots.textarea">
            <!--<label :class="UIName + '-input-label'" v-text="label"></label>-->
            <div :class="[UIName + '-input-control']">
                <textarea :placeholder="label"></textarea>
                <div :class="[UIName + '-textarea-count']">7/200</div>
            </div>
        </div>

        <!--counter-->
        <div :class="[UIName+'-cell-item', UIName+'-counter-item']" v-if="counter || $slots.counter">
            <div :class="UIName + '-cell-title'" v-text="title"></div>
            <slot name="counter"></slot>
        </div>

        <!--switch-->
        <div :class="[UIName+'-cell-item', UIName+'-switch-item']"  v-if="Switch || $slots.Switch">
            <div :class="UIName + '-cell-title'" v-text="title"></div>
            <slot name="Switch"></slot>
        </div>

        <!--checkbox-->
        <div :class="[UIName+'-cell-item', UIName+'-checkbox-item']"  v-if="checkbox || $slots.checkbox">
            <slot name="checkbox"></slot>
            <div :class="UIName + '-cell-title'" v-text="title"></div>
        </div>

        <!--radio-->
        <div :class="[UIName+'-cell-item', UIName+'-checkbox-item']"  v-if="radio || $slots.radio">
            <input type="radio"/>
            <div :class="UIName + '-cell-title'" v-text="title"></div>
        </div>
    </div>
</template>

<script>
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-cell-item',
        mixins: [UIName],
        props: {
            right: Boolean,
            label: String,
            title: String,
            Switch: Boolean,
            counter: Boolean,
            checkbox: Boolean,
            input: Boolean,
            textarea: Boolean
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
</style>
