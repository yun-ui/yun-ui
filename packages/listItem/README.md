# ListItem

列表项组件。单行文本列表和双行文本列表。

### 例子

#### 单行文本列表

文字列表

``` javascript
<yun-list-item title="列表标题"></yun-list-item>
<yun-list-item title="列表标题" secondaryText="辅助文本"></yun-list-item>
<yun-list-item title="列表标题" secondaryText="辅助文本" link></yun-list-item>
```

图片+文字列表

``` javascript
<yun-list-item title="列表标题" secondaryText="辅助文本">
    <img src="../../demo/assets/placeholder-figure.png" slot="iconLeft">
</yun-list-item>

<yun-list-item title="列表标题" secondaryText="辅助文本">
    <img src="../../demo/assets/placeholder-figure.png" slot="iconRight">
</yun-list-item>

<yun-list-item title="列表标题" secondaryText="辅助文本" link>
    <img src="../../demo/assets/placeholder-figure.png" slot="iconLeft">
    <img src="../../demo/assets/placeholder-figure.png" slot="iconRight">
</yun-list-item>
```

#### 双行文本列表

``` javascript
<yun-list-item title="列表标题" secondaryText="辅助文本" multi></yun-list-item>

<yun-list-item title="列表标题" secondaryText="辅助文本" multi link>
    <img src="../../demo/assets/placeholder-figure.png" slot="icon">
</yun-list-item>

<yun-list-item title="列表标题" secondaryText="辅助文本" multi>
    <img src="../../demo/assets/placeholder-figure.png" slot="img">
</yun-list-item>

<yun-list-item title="列表标题" secondaryText="辅助文本" multi avatar>
    <img src="../../demo/assets/placeholder-figure.png" slot="img">
</yun-list-item>
```

### API

|   参数  |   描述  |   类型  |   可选值   |   默认值   |
|   ----    |   ----   |   ----   |   ----    |   ----    |
|   title   |   列表标题   |   String   |       |       |
|   secondaryText   |   辅助文本    |   String  |       |       |
|   link    |   链接型列表标记    |    Boolean    |        |   false    |
|   multi    |   双行文本列表标记  |   Boolean  |       |   false    |
|   avatar   |   双行文本列表左边圆形图片标记  |   Boolean  |       |   false    |

### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   iconLeft    |   【单行列表】左边小图标 |
|   iconRight   |   【单行列表】右边小图标 |
|   img         |   【双行列表】左边图片  |
|   icon        |   【双行列表】左边小图标 |

> 为了语义化组件，我们建议在一个列表组外面添加 ListContainer 容器组件。
> ``` javascript
> <yun-list-container>
>     <yun-list-item title="列表标题"></yun-list-item>
> </yun-list-container>
> ```