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
<y-list-item title="列表标题">
    <img src="../assets/placeholder-figure.png" slot="iconLeft">
</y-list-item>

<y-list-item title="列表标题" link>
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

#### 多行文本列表

文字列表

``` javascript
<y-list-item title="列表标题" secondaryText="辅助文本" multi></y-list-item>
<y-list-item title="列表标题" secondaryText="辅助文本" multi link></y-list-item>
```

图文列表

``` javascript
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
#### 特殊列表 

二级标题文本列表

``` javascript
<y-list-item title="列表一级标题" first></y-list-item>
<y-list-item title="列表二级标题" link secondaryText="辅助文本"></y-list-item>
<y-list-item title="列表二级标题" link secondaryText="辅助文本"></y-list-item>
```

两行文本列表

``` javascript
<template>
    <y-list-item :items="itemData"></y-list-item>
</template>
<script>
 export default {
    data () {
        return {
            itemData: [
                '请假总天数： 0.00',
                '请假总时长： 0.00'
            ]
        }
    }
 }
</script>
```

具有辅助分栏的列表

``` javascript
 <y-list-item title="列表标题" secondaryText="辅助文本" multi link assist="辅助文本分栏"> 
    <img src="../../demo/assets/demo.png" slot="img">
</y-list-item>
```

添加图标的列表

``` javascript
<template>
    <y-list-item title="添加请假明细" add :itemStyle="itemAddStyle"></y-list-item>
</template>
<script>
 export default {
    data () {
        return {
            itemAddStyle: {
                color: 'rgb(253, 163, 43)' //图标以及文字颜色
            }
        }
    }
 }
</script>
```

单行辅助文本颜色变化

``` javascript
<template>
    <y-list-item title="示例字段(1)" secondaryText="删除" :itemStyle="itemAddStyle" @operate="operate"></y-list-item>
</template>
<script>
 export default {
    data () {
        return {
            itemAddStyle: {
                color: 'rgb(253, 163, 43)' //图标以及文字颜色
            }
        }
    },
    methods: {
        operate () {
        }
    }
 }
</script>
```

### API

|   参数  |   描述  |   类型  |   可选值   |   默认值   |
|   ----    |   ----   |   ----   |   ----    |   ----    |
|   title   |   列表标题   |   String   |       |       |
|   secondaryText   |   辅助文本    |   String  |       |       |
|   first   |   一级标题标记         | Boolean |          |       | 
|   assist  |  辅助文本分栏标记       | Boolean | | |
|   add    |      添加图标标记                  | Boolean || |
|   link    |   链接型列表标记    |    Boolean    |        |   false    |
|   multi    |   双行文本列表标记  |   Boolean  |       |   false    |
|   avatar   |   双行文本列表左边圆形图片标记  |   Boolean  |       |   false    |
|  itemStyle |    辅助文本颜色更改以及添加图标颜色更改 | Object || |
|   items |     双行文本内容  | Array |  || 
|  operate | 单行辅助文本回调函数 |Function| | | 
### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   iconLeft    |   【单行列表】左边小图标 |
|   iconRight   |   【单行列表】右边小图标 |
|   img         |   【双行列表】左边图片  |
|   icon        |   【双行列表】左边小图标 |

