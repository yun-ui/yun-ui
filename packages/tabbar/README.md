# Tabbar

底部选项卡。`建议选项不超过4个，文本不超过8个字符`

> *注：推荐选项卡图标直接使用iconfont

### 使用场景

需要在底部创建选项卡进行导航，用于在两个或多个功能页面间进行切换时。

> 依赖 `tab-item` 组件使用

### 引入

``` javascript
import Vue from 'vue'
import {Tabbar, TabItem} from 'yun-ui'
import 'yun-ui/dist/yun/Tabbar/index.css'
import 'yun-ui/dist/yun/TabItem/index.css'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
```

### 代码示例

``` javascript
<y-tabbar defaultActiveTabId="1" @change="">
    <y-tab-item title="文本" tabId="1"></y-tab-item>
    <y-tab-item title="文本" tabId="2"></y-tab-item>
</y-tabbar>
```

### API

| 参数        | 描述        | 类型        | 可选值       | 默认值   |
| ----       | ----       | ----       | ----       | ----  |
|defaultActiveTabId | 默认active的tab，并在tab-item组件中传入相应的tabId值，若需要切换不同按钮active功能，需要给每个tab-item绑定tabId | String |  |  |
| change      | tab-item元素active点击切换时的回调函数，参数为切换后的tabId|  Function   |  |    |

## TabItem 组件使用说明

### TabItem API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| title |   文本  |   String  |       |       |
| tabId |   tab绑定的id，用于区分不同的tab  |   String  |       |       |

### TabItem Slot API

| 参数        | 描述        |
| ----       | ----       |
| icon      | 加入的图标    |