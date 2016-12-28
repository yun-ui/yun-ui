# CellContainer

通用表单项组件容器。

### 何时使用

最基本的表单项组件的容器，可用于包含表单项组件，比如：单选框组件（radio）、
复选框组件（checkbox）、文本输入组件（input | textarea）等。

> 注：仅作为语义化组件用，没有API

### 使用方法

``` javascript
<template>
    <yun-cell-container>
        <p>Cell item 1</p>
        <p>Cell item 2</p>
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