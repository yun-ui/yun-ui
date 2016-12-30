# ButtonGroup

按钮组，通过按钮组容器把一组按钮放在同一行里。`建议按钮不超过4个，文本不超过8个字符`

> *注：推荐带图标的按钮直接使用 iconfont。


### 例子

> 依赖 `tab-item` 组件使用

普通文本按钮组

``` javascript
<yun-button-group>
    <yun-tab-item title="text"></yun-tab-item>
    <yun-tab-item title="text"></yun-tab-item>
    <yun-tab-item title="text"></yun-tab-item>
    <yun-tab-item title="text"></yun-tab-item>
</yun-button-group>
```

图标按钮组

``` javascript
<yun-button-group>
    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
</yun-button-group>
```

图标 + 文本按钮组

``` javascript
<yun-button-group>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
    <yun-tab-item title="text"><i class="iconfont icon-demo" slot="icon"></i></yun-tab-item>
</yun-button-group>
```

固定在页面底部

``` javascript
<yun-button-group fixed></yun-button-group>
```

### API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| fixed      | 定位       |  Boolean   |            | false      |

### TabItem API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| title |   文本  |   String  |       |       |

### TabItemSlot

| 参数        | 描述        |
| ----       | ----       |
| icon      | 按钮组中加入的图标    |