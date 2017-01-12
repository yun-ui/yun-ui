# ListItem

列表项组件。单行文本列表和双行文本列表。

> 为了语义化组件，我们建议在一个列表组外面添加 ListContainer 容器组件。
> ListContainer是最基本的通用表单项组件容器，可用于包含文字、图标、图片、文本段等，用于列表区域。
> ``` javascript
> <y-list-container>
>     <y-list-item title="列表标题"></y-list-item>
> </y-list-container>
> ```

### 引入

``` javascript
import Vue from 'vue'
import {ListContainer, ListItem} from 'yun-ui'
import 'yun-ui/dist/yun/ListContainer/index.css'
import 'yun-ui/dist/yun/ListItem/index.css'

Vue.component(ListContainer.name, ListContainer)
Vue.component(ListItem.name, ListItem)
```

### 代码示例

#### 单行文本列表

文字列表

``` javascript
<y-list-item title="列表标题"></y-list-item>
<y-list-item title="列表标题" secondaryText="辅助文本"></y-list-item>
<y-list-item title="列表标题" secondaryText="辅助文本" link></y-list-item>
```

图片+文字列表

``` javascript
<y-list-item title="列表标题" secondaryText="辅助文本">
    <img src="../assets/placeholder-figure.png" slot="iconLeft">
</y-list-item>

<y-list-item title="列表标题" secondaryText="辅助文本">
    <img src="../assets/placeholder-figure.png" slot="iconRight">
</y-list-item>

<y-list-item title="列表标题" secondaryText="辅助文本" link>
    <img src="../assets/placeholder-figure.png" slot="iconLeft">
    <img src="../assets/placeholder-figure.png" slot="iconRight">
</y-list-item>
```

#### 双行文本列表

``` javascript
<y-list-item title="列表标题" secondaryText="辅助文本" multi></y-list-item>

<y-list-item title="列表标题" secondaryText="辅助文本" multi link>
    <img src="../assets/placeholder-figure.png" slot="icon">
</y-list-item>

<y-list-item title="列表标题" secondaryText="辅助文本" multi>
    <img src="../assets/placeholder-figure.png" slot="img">
</y-list-item>

<y-list-item title="列表标题" secondaryText="辅助文本" multi avatar>
    <img src="../assets/placeholder-figure.png" slot="img">
</y-list-item>
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
