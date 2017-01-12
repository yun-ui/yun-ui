# ButtonGroup

按钮组。

> *注：推荐带图标的按钮使用 iconfont。

### 使用场景

通过按钮组容器把一组按钮放在同一行里。`建议按钮不超过4个，文本不超过8个字符`。

### 引入

> 依赖 `tab-item` 组件使用。

``` javascript
import Vue from 'vue'
import {ButtonGroup, TabItem} from 'yun-ui'
import 'yun-ui/dist/yun/ButtonGroup/index.css'
import 'yun-ui/dist/yun/TabItem/index.css'

Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(TabItem.name, TabItem)
```

### 例子

普通文本按钮组

``` javascript
<y-button-group defaultActiveTabId="2" @change="change">
    <y-tab-item title="文本" tabId="1"></y-tab-item>
    <y-tab-item title="文本" tabId="2"></y-tab-item>
    <y-tab-item title="文本" tabId="3"></y-tab-item>
</y-button-group>
```

图标按钮组

``` javascript
<y-button-group defaultActiveTabId="2">
    <y-tab-item tabId="1"><i class="iconfont icon-demo" slot="icon"></y-tab-item>
    <y-tab-item tabId="2"><i class="iconfont icon-demo" slot="icon"></y-tab-item>
    <y-tab-item tabId="3"><i class="iconfont icon-demo" slot="icon"></y-tab-item>
</y-button-group>
```

图标 + 文本按钮组

``` javascript
<y-button-group defaultActiveTabId="2">
    <y-tab-item title="文本" tabId="1"><i class="iconfont icon-demo" slot="icon"></y-tab-item>
    <y-tab-item title="文本" tabId="2"><i class="iconfont icon-demo" slot="icon"></y-tab-item>
    <y-tab-item title="文本" tabId="3"><i class="iconfont icon-demo" slot="icon"></y-tab-item>
</y-button-group>
```

固定在页面底部

``` javascript
<y-button-group fixed>
    <y-tab-item title="文本"></y-tab-item>
    <y-tab-item title="文本"></y-tab-item>
    <y-tab-item title="文本"></y-tab-item>
</y-button-group>
```

### API

| 参数        | 描述       | 类型        | 可选值       | 默认值      |
| ----       | ----       | ----       | ----       | ----       |
| fixed      | 定位，为true时按钮组固定在页面底部|  Boolean   | true,false | false    |
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