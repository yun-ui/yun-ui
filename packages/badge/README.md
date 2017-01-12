# 徽章 Badge

徽章标记，支持自定义颜色（请使用云之家官方推荐配色）。

### 使用场景

用于标注状态，提醒。

### 引入

``` javascript
import Vue from 'vue'
import {Badge} from 'yun-ui'
import 'yun-ui/dist/yun/Badge/index.css'

Vue.component(Badge.name, Badge)
```

### 代码示例

默认

``` javascript
<y-badge></y-badge>
```

传入文本

``` javascript
<y-badge type="text" text="100+"></y-badge>
```

自定义颜色，传入RGB值

``` javascript
<y-badge color="#AF65DF"></y-badge>
```


### API

|    参数    |    描述     |    类型    |       可选值    |      默认值   |
|   ----    |    ----    |    ----   |      ----      |     ----     |
|     -     |   默认      |     -     |         -      |       -      |
|    type   |   徽章形态   |   String  |     dot,text   |       dot    |
|   text   |   提示文本   |   String  |                |    text的文本 |
|   color   |   徽章颜色   |   String  |                |   color的颜色 |