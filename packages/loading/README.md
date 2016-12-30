# Loading

全局展示一个提示框，置于所有元素之上。

### 使用场景

可用于异步请求时，或在用户操作后等待下一步操作时的提示.

### 引入

``` javascript
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

### 例子

``` javascript
<yun-loading content="加载中...">
    <img src="../assets/loading.png" slot="icon"/>
</yun-loading>
<yun-loading content="加载中..." refresh>
    <img src="../assets/loading.png" slot="icon"/>
</yun-loading>
```

### API

| 参数        | 描述        | 类型        | 可选值     | 默认值      |
| ----       | ----       | ----        | ----       | ----      |
| content    | 提示内容       |  String   |            |       |
| refresh    | 刷新类型标记       |  Boolean   |            | false      |

### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   icon        |  loading 加入的图标 |