# Navbar

顶部导航栏。

### 使用场景

当需要在页面顶部创建一个导航栏，用于在两个或多个功能页面间进行切换时。

### 引入

与tab item组件搭配使用，创建导航。

``` javascript
<script>
// 如果你已经引入了全部的YunUI组件，忽略import

import yunNavbar from 'YunUI/dist/yun/navbar'
import yunTabItem from 'YunUI/dist/yun/tabItem'
import 'YunUI/dist/yun/navbar/index.css'
import 'YunUI/dist/yun/tabItem/index.css'
export default {
    components:{
        yunNavbar,
        yunTabItem
    }
}
</script>
```

### 例子

> 依赖 `tab-item` 组件使用

``` javascript
<yun-navbar>
    <yun-tab-item title="文本" active></yun-tab-item>
    <yun-tab-item title="文本"></yun-tab-item>
</yun-navbar>
```


固定在页面顶部

``` javascript
<yun-navbar fixed></yun-navbar>
```

### API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| fixed       | 定位 |  Boolean  | | false |

### TabItem API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| title |   文本  |   String  |       |       |