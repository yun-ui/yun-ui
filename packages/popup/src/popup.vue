<template>
    <div>
        <div :class="UIName+'-mask'"></div>
        <div :class="[UIName+'-popup']">
            <div :class="[UIName+'-popup-cover']"
                 v-if="cover || $slots.cover">
                <slot name="cover"></slot>
            </div>
            <div :class="[UIName+'-popup-title', UIName+'-ellipse']"
                 v-text="title"
                 v-if="title || $slots.title">
            </div>
            <div :class="[UIName+'-popup-list']"
                 v-if="textList || $slots.textList">
                <ul>
                    <li v-for="item in textList">{{item.content}}</li>
                </ul>
            </div>
            <div :class="[UIName+'-popup-content']"
                 v-if="content || $slots.content">
                <div :class="[UIName+'-multi-ellipse']" v-text="content"></div>
            </div>
            <div :class="[UIName+'-popup-input']" v-if="input || $slots.input">
                <div v-if="input=='input'">
                    <input type="text" placeholder="请输入">
                    <p>
                        <small :class="[UIName+'-text-warn']">错误提示文本</small>
                    </p>
                </div>
                <div v-if="input=='textarea'">
                    <textarea placeholder="请输入"></textarea>
                    <p>
                        <small :class="[UIName+'-text-warn']">错误提示文本</small>
                    </p>
                </div>
            </div>
            <div :class="[UIName+'-popup-button']" v-if="button || $slots.button">
                <slot name="button"></slot>
            </div>
            <slot name="buttonGroup" v-if="buttonGroup || $slots.buttonGroup"></slot>
        </div>
    </div>
</template>

<script>
    // TODO 错误文本（类似表单验证）
    import {UIName} from '../../../src/mixins/'
    export default {
        name: 'yun-popup',
        mixins: [UIName],
        props: {
            cover: String,
            title: String,
            content: String,
            input: String,
            textList: Array,
            button: String,
            buttonGroup: String,
            close: Function
        },
        methods: {
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/stylesheets/popup";
</style>
