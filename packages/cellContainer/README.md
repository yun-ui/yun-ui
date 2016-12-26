# CellContainer

通用列表项组件容器。

## 何时使用

最基本的列表项组件的容器，可用于包含文字、图标、图片、文本段等，用于列表区域。

## 使用方法

``` javascript
<template>
    <yun-cell-container>
        <p>Cell Content 1</p>
        <p>Cell Content 2</p>
    </yun-cell-container>
</template>
<script>
// 如果你已经引入了全部的YunUI组件，忽略import
import yunCellContainer from 'YunUI/dist/yun/cellContainer'
import 'YunUI/dist/yun/cellContainer/index.css'
export default {
    components:{
        yunCellContainer
    }
}
</script>

```

结合Cell Item组件创建更丰富的列表，详细参见Cell Item组件用法。