<template>
    <div>

        <!--input-->
        <div :class="[UIName+'-cell-item', UIName+'-input-item']" v-if="input || $slots.input">
            <label :class="UIName + '-input-label'">
                <span  v-text="label"></span>
            </label>
            <div :class="[UIName + '-input-control']"><input type="text" placeholder="placeholder"/></div>
        </div>

        <!--textarea-->
        <div :class="[UIName+'-cell-item', UIName+'-input-item', UIName+'-textarea-item']" v-if="textarea || $slots.textarea">
            <div :class="[UIName + '-input-control']">
                <textarea :placeholder="label"></textarea>
                <div :class="[UIName + '-textarea-count']">7/200</div>
            </div>
        </div>

        <!--counter-->
        <div :class="[UIName+'-cell-item', UIName+'-counter-item']" v-if="counter || $slots.counter">
            <div :class="UIName + '-cell-title'">
                <span v-text="title"></span>
            </div>
            <slot name="counter"></slot>
        </div>

        <!--switch-->
        <div :class="[UIName+'-cell-item', UIName+'-switch-item']"  v-if="Switch || $slots.Switch">
            <div :class="UIName + '-cell-title'">
                <span v-text="title"></span>
            </div>
            <slot name="Switch"></slot>
        </div>

        <!--checkbox-->
        <div :class="[UIName+'-cell-item', UIName+'-checkbox-item']"  v-if="checkbox || $slots.checkbox">
            <slot name="checkbox"></slot>
            <div :class="UIName + '-cell-title'">
                <span v-text="title"></span>
            </div>
        </div>

        <!--radio-->
        <div :class="[UIName+'-cell-item', UIName+'-radio-item']"  v-if="radio || $slots.radio">
            <div :class="UIName + '-cell-title'">
                <span v-text="title"></span>
            </div>
            <div :class="UIName+'-radio'">
                <input :class="UIName+'-radio-input'" name="radio" type="radio"/>
                <div :class="UIName+'-radio-inner'">
                    <i class="iconfont icon-true"></i>
                </div>
            </div>
        </div>

        <!--imagePicker-->
        <div  v-if="imagePicker || $slots.imagePicker">
            <div :class="[UIName+'-cell-item', UIName+'-imagePicker-item']">
                <div :class="UIName + '-cell-title'">
                    <span v-text="title"></span>
                    <small :class="UIName+ '-cell-secondary'" v-text="secondary"></small>
                </div>
                <div :class="UIName+'-icon-container'">
                    <i class="iconfont icon-add-field"></i>
                </div>
            </div>
            <!--TODO repeat图片的时候这里的模板怎么配置比较好-->
            <div :class="UIName+'-image-content'">
                <div :class="UIName+'-image-item'">
                    <div :class="UIName+'-image-container'">
                        <slot name="image"></slot>
                    </div>
                    <div :class="UIName+'-image-upload-progress'">
                        <span>50%</span>
                        <i class="iconfont icon-warn"></i>
                    </div>
                    <span :class="[UIName+'-delete-image', 'iconfont', 'icon-close-line']"></span>
                </div>
            </div>
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
            secondary: String,
            Switch: Boolean,
            counter: Boolean,
            checkbox: Boolean,
            input: Boolean,
            textarea: Boolean,
            radio: Boolean,
            imagePicker: Boolean,
            image: String
        },
        methods: {}
    }

</script>

<style lang="less" rel="stylesheet/less">
</style>
