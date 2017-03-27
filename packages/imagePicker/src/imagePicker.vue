<template>
    <div :class="UIName+'-image-picker'">
        <div :class="[UIName+'-image-picker-title']">
            <label :class="UIName+'-image-picker-label'" v-text="label"></label>
            <small :class="UIName+ '-image-picker-secondary'" v-text="text"></small>
            <div :class="UIName+'-image-picker-add'">
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
                    <!--TODO 图片上传过程交互-->
                    <span>50%</span>
                    <i class="iconfont icon-warn"></i>
                </div>
                <span :class="[UIName+'-delete-image', 'iconfont', 'icon-close-line']"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default {
        name: 'y-image-picker',
        mixins: [UIName],
        props: {
            label: String,
            text: String,
            image: String
        },
        methods: {}
    }

</script>

<style lang="less">
    @import "../../style/stylesheets/imagePicker";
</style>