# Toast

提示框。

### 使用场景

用于操作后的提示，默认显示时间为 2000 ms。

### 引入

``` javascript
import Vue from 'vue'
import {Toast} from 'yun-ui'
import 'yun-ui/dist/yun/Toast/index.css'

Vue.use(Toast)
```

### 代码示例

图文提示
``` javascript
// 在vue组件实例中调用
this.$toast({
    content: '操作成功',
    icon: 'success'
})
```

底部提示
``` javascript
this.$toast({
    content: '操作成功',
    position: 'bottom'
})
```

### API

| 参数        | 描述        | 类型        | 可选值    | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| content |   提示文本  |   String  |       |       |
| icon |   带图标的提示  |   Boolean  |  success   |       |
| position |   固定在底部标记，为bottom时提示在底部  |   Boolean  | bottom  |       |
| duration |   提示框显示的时间（毫秒）  |   Number  |       |  1000  |
