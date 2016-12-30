# Tabbar

底部选项卡。`建议选项不超过4个，文本不超过8个字符`

> *注：推荐选项卡图标直接使用iconfont

------

### 例子

依赖 `tab-item` 组件

``` javascript
<yun-tabbar>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
</yun-tabbar>
```

### TabItem API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| title |   文本  |   String  |       |       |

### TabItemSlot

| 参数        | 描述        |
| ----       | ----       |
| icon      | 加入的图标    |