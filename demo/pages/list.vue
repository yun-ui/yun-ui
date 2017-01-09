<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">List 列表</h3>
            <p>YunUI 提供了一套可定制的单元格组件，用于复杂列表展示，比如常见的：
                <strong>图文混排列表</strong>、<strong>链接列表</strong>
                、<strong>单行文本列表</strong>、<strong>多行文本列表</strong>。</p>
            <div>

            </div>
        </div>
        <div class="content cell">
            <h4 class="yun-h4">单行文本列表</h4>
            <div class="row">
                <yun-list-container>
                    <yun-list-item title="列表标题" secondaryText="辅助文本">
                    </yun-list-item>
                    <yun-list-item title="列表标题" link>
                    </yun-list-item>

                    <yun-list-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/demo.png" slot="iconLeft">
                    </yun-list-item>
                    <yun-list-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/demo.png" slot="iconLeft">
                        <img src="../../demo/assets/demo.png" slot="iconRight">
                    </yun-list-item>
                    <yun-list-item title="列表标题" secondaryText="辅助文本">
                        <img src="../../demo/assets/demo.png" slot="iconRight">
                    </yun-list-item>

                    <yun-list-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/demo.png" slot="iconRight">
                    </yun-list-item>
                </yun-list-container>
            </div>
            <h4 class="yun-h4">多行文本列表</h4>
            <div class="row">
                <yun-list-container>
                    <yun-list-item title="列表标题" secondaryText="辅助文本" multi>
                    </yun-list-item>

                    <yun-list-item title="列表标题" secondaryText="辅助文本" multi link>
                    </yun-list-item>

                    <yun-list-item title="列表标题" secondaryText="辅助文本" multi link>
                        <img src="../../demo/assets/demo.png" slot="icon">
                    </yun-list-item>

                    <yun-list-item title="列表标题" secondaryText="辅助文本" multi>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </yun-list-item>
                    <yun-list-item title="列表标题" secondaryText="辅助文本" multi avatar>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </yun-list-item>

                    <yun-list-item title="列表标题" secondaryText="辅助文本" multi link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </yun-list-item>
                </yun-list-container>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}

</script>

<style lang="less">

</style>
