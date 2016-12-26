# Loading

全局展示一个提示框，置于所有元素之上。

## 何时使用

可用于异步请求时，或在用户操作后等待下一步操作时的提示.

## 使用方法
``` javascript
<template>
    <yun-loading content="加载中...">
        <img src="../assets/loading.png" slot="icon"/>
    </yun-loading>
</template>
<script>
// 如果你已经引入了全部的YunUI组件，忽略import
import yunCellContainer from 'YunUI/dist/yun/loading'
import 'YunUI/dist/yun/loading/index.css'
export default {
    components:{
        yunLoading
    }
}
</script>
```


### API

| 参数        | 描述        | 类型        | 可选值     | 默认值      |
| ----       | ----       | ----        | ----       | ----      |
| icon       | 定位       |  Boolean   |            | false      |
| refresh    | 定位       |  Boolean   |            | false      |
| content    | 定位       |  Boolean   |            | false      |
