# Navbar

为页面提供导航菜单列表。

### 何时使用

当需要创建一个导航栏，用于在两个或多个功能页面间进行切换时。

### 使用方法

与tab item组件搭配使用，创建导航。

``` javascript
// 如果你已经引入了全部的YunUI组件，忽略import

import yunCellContainer from 'YunUI/dist/yun/cellContainer'
import yunTabItem from 'YunUI/dist/yun/tabItem'
import 'YunUI/dist/yun/cellContainer/index.css'
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

``` javascript
<template>
    <yun-navbar>
        <yun-tab-item>导航文本</yun-tab-item>
        <yun-tab-item>导航文本</yun-tab-item>
    </yun-navbar>
</template>
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
| active      | 点击状态       |  Boolean   |           |   false    |
| title |   文本  |   String  |       |       |