<template>
    <div>
        <div :class="[UIName+'-form-item', UIName+'-imagePicker-item']">
            <div :class="UIName + '-form-title'">
                <span v-text="label"></span>
                <small :class="UIName+ '-form-secondary'" v-text="text"></small>
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
        name: 'yun-image-picker',
        mixins: [UIName],
        props: {
            label: String,
            text: String,
            image: String
        },
        methods: {}
    }

</script>
