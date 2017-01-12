# TabItem

标签项。

> 不可单独使用。

### 使用场景

主要嵌入在其他组件中。比如 tabbar、navbar 和 buttonGroup组件中，作为子项使用。

### 例子

``` javascript
// 嵌入tabbar组件中
<y-tabbar>
    <y-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
    <y-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
    <y-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
    <y-tab-item title="文本"><i class="iconfont icon-demo" slot="icon"></i></y-tab-item>
</y-tabbar>
```

### API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| title |   文本  |   String  |       |       |
| tabId |  tab绑定的id，用于区分不同的tab  |   String  |       |       |

### Slot

| 参数        | 描述        |
| ----       | ----       |
| icon      | 加入的图标    |

