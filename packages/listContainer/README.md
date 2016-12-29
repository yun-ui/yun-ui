# ListContainer

通用列表项组件容器。

> 注：仅作为语义化组件用，没有API

### 何时使用

最基本的列表项组件的容器，可用于包含文字、图标、图片、文本段等，用于列表区域。


### 使用方法

``` javascript
<script>
// 如果你已经引入了全部的YunUI组件，忽略import
import yunListContainer from 'YunUI/dist/yun/listContainer'
import 'YunUI/dist/yun/listContainer/index.css'
export default {
    components:{
        yunListContainer
    }
}
</script>
```

### 例子

``` javascript
<template>
    <yun-list-container>
        <p>List item 1</p>
        <p>List item 2</p>
    </yun-list-container>
</template>
```

结合List Item组件创建更丰富的列表，详细参见List Item组件用法。