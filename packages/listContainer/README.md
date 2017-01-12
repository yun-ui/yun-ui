# ListContainer

通用列表项组件容器。

> 注：仅作为语义化组件用，没有API

### 使用场景

最基本的列表项组件的容器，可用于包含文字、图标、图片、文本段等，用于列表区域。


### 引入

``` javascript
import Vue from 'vue'
import {ListContainer} from 'yun-ui'
import 'yun-ui/dist/yun/ListContainer/index.css'

Vue.component(ListContainer.name, ListContainer)
```

### 例子

``` javascript
<yun-list-container>
    <p>List item 1</p>
    <p>List item 2</p>
</yun-list-container>
```

结合List Item组件创建更丰富的列表，详细参见[List Item组件文档](../listItem/README.md)。