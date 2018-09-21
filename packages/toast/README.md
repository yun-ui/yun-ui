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
文字提示
``` javascript
// 在vue组件实例中调用
this.$toast({
    content: '操作成功',
    icon: '', //非必选
    duration: 2000,
    position: '' //文字提示在底部 非必选
})
```
图文提示（成功状态）
``` javascript
// 在vue组件实例中调用
this.$toast({
    content: '操作成功',
    icon: 'success',
    duration: 2000, //非必选
    position: '' //提示在底部 非必选
})
```
图案提示（loading状态）
``` javascript
// 在vue组件实例中调用
this.$toast({
    content: '', //必选，给空值
    icon: 'waiting',
    duration: 2000, //非必选
    position: '' //文字提示在底部 非必选
})
```

图文提示（loading状态）
``` javascript
// 在vue组件实例中调用
this.$toast({
    content: '操作成功',
    icon: 'waiting',
    duration: 2000, //非必选
    position: '' //提示在底部 非必选
})
```

### API

| 参数        | 描述        | 类型        | 可选值    | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| content |   提示文本  |   String  |       |       |
| icon |   带图标的提示  |   Boolean  |  success   |       |
| position |   固定在底部标记，为bottom时提示在底部  |   Boolean  | bottom  |       |
| duration |   提示框显示的时间（毫秒）  |   Number  |       |  2000  |
