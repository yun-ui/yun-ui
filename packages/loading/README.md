# Loading

全局展示一个提示框，置于所有元素之上。

### 使用场景

可用于异步请求时，或在用户操作后等待下一步操作时的提示.

### 引入

``` javascript
import Vue from 'vue'
import {Loading} from 'yun-ui'
import 'yun-ui/dist/yun/Loading/index.css'

Vue.component(Loading.name, Loading)
```

### 代码示例

``` javascript
<!-- 在页面中部显示的刷新提示 -->
<y-loading content="加载中...">
    <img src="../assets/loading.png" slot="icon"/>
</y-loading>
<!-- 在页面顶部显示的刷新提示 -->
<y-loading content="加载中..." refresh>
    <img src="../assets/waiting.png" slot="icon"/>
</y-loading>
```

### API

| 参数        | 描述        | 类型        | 可选值     | 默认值      |
| ----       | ----       | ----        | ----       | ----      |
| content    | 提示内容       |  String   |            |       |
| refresh    | 刷新类型标记       |  Boolean   |            | false      |

### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   icon        |  loading中使用的图标 |