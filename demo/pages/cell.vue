<template>
    <div>
        <div class="title">
            <h3>Cell 单元格</h3>
            <p>YunUI 提供了一套可定制的单元格组件，用于复杂列表展示，比如常见的：
                <strong>图文混排列表</strong>、<strong>链接列表</strong>
                、<strong>单行文本列表</strong>、<strong>多行文本列表</strong>。</p>
            <div>

            </div>
        </div>
        <div class="content cell">
            <h4>单行文本列表</h4>
            <div class="row">
                <yun-cell-container>
                    <yun-cell-item title="列表标题" secondaryText="辅助文本">
                        <img src="../../demo/assets/placeholder-figure.png" slot="icon">
                    </yun-cell-item>
                    <yun-cell-item title="列表标题" link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="icon">
                    </yun-cell-item>

                    <yun-cell-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="icon">
                    </yun-cell-item>
                    <yun-cell-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="icon">
                        <img src="../../demo/assets/placeholder-figure.png" slot="iconRight">
                    </yun-cell-item>
                    <yun-cell-item title="列表标题" secondaryText="辅助文本">
                        <img src="../../demo/assets/placeholder-figure.png" slot="iconRight" >
                    </yun-cell-item>

                    <yun-cell-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="iconRight">
                    </yun-cell-item>
                </yun-cell-container>
            </div>
            <h4>多行文本列表</h4>
            <div class="row">
                <yun-cell-container>
                    <yun-cell-item title="列表标题" secondaryText="辅助文本" multi>
                    </yun-cell-item>

                    <yun-cell-item title="列表标题" secondaryText="辅助文本" multi link>
                    </yun-cell-item>

                    <yun-cell-item title="列表标题" secondaryText="辅助文本" multi>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </yun-cell-item>
                    <yun-cell-item title="列表标题" secondaryText="辅助文本" multi avatar>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </yun-cell-item>

                    <yun-cell-item title="列表标题" secondaryText="辅助文本" multi link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </yun-cell-item>
                </yun-cell-container>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {},
        created () {
        },
        methods: {}
    }

</script>

<style lang="less">

</style>
