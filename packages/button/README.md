# 按钮 Button

按钮，根据尺寸和状态提供了几种基础样式。

### 使用场景

创建按钮。

### 引入

``` javascript
import Vue from 'vue'
import {Button} from 'yun-ui'
import 'yun-ui/dist/yun/Button/index.css'

Vue.component(Button.name, Button)
```

### 代码示例

默认按钮

``` javascript
 <y-button>normal</y-button>
 <y-button type="normal">normal</y-button>
```

线性按钮

``` javascript
<y-button type="linear">linear</y-button>
```

改变大小

``` javascript
<y-button size="large">large</y-button>
<y-button size="middle">middle</y-button>
<y-button size="small">small</y-button>
```

禁用按钮

``` javascript
<y-button disabled>disabled</y-button>
```

绑定事件

``` javascript
<y-button @click='handleClick'></y-button>
```

### API

|    参数    |    描述    |    类型    |       可选值    |      默认值   |
|   ----    |   ----     |   ----    |      ----      |     ----     |
|   type    |   按钮形态  |   String  |  normal，linear |    normal    |
|   size    |    尺寸    |   String  |  large,middle,small  |   large  |
| disabled  |   禁用状态  |   Boolean |                |     false    |