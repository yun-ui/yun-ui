# Navbar

顶部导航栏。

### 使用场景

当需要在页面顶部创建一个导航栏，用于在两个或多个功能页面间进行切换时。

> 依赖 `tab-item` 组件使用

> tab-item组件的使用方法，请参考[TabItem文档](../tabItem/README.md)

### 引入

``` javascript
import Vue from 'vue'
import {Navbar, TabItem} from 'yun-ui'
import 'yun-ui/dist/yun/Navbar/index.css'
import 'yun-ui/dist/yun/TabItem/index.css'

Vue.component(Loading.name, Loading)
Vue.component(TabItem.name, TabItem)
```

### 代码示例

``` javascript
<y-navbar defaultActiveTabId="1" @change="">
    <y-tab-item title="文本" tabId="1"></y-tab-item>
    <y-tab-item title="文本" tabId="2"></y-tab-item>
</y-navbar>
```


固定在页面顶部

``` javascript
<y-navbar fixed></y-navbar>
```

### API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| fixed       | 定位 |  Boolean  | | false |
|defaultActiveTabId | 默认active的tab，并在tab-item组件中传入相应的tabId值，若需要切换不同按钮active功能，需要给每个tab-item绑定tabId | String |  |  |
| change      | tab-item元素active点击切换时的回调函数，参数为切换后的tabId|  Function   |  |    |
