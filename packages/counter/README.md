# Counter

表单，计数器组件。

### 使用场景

用于表单中创建一个计数器。

> 搭配form组件使用。
> form是最基本的通用表单项组件容器，可用于包含表单项组件。仅作为语义化组件用，没有API，但可在其上监听form内组件的事件变化。

### 引入

``` javascript
import Vue from 'vue'
import {Form, Counter} from 'yun-ui'
import 'yun-ui/dist/yun/Form/index.css'
import 'yun-ui/dist/yun/Counter/index.css'

Vue.component(Form.name, Form)
Vue.component(Counter.name, Counter)
```

### 代码示例

``` javascript
<y-form>
    <y-counter label="计数器" :value="5" :min="1" :max="10" :step="2" @change="change"></y-counter>
</y-form>
```

### API

|    参数    |      说明      |    类型    |   可选值    |   默认值   |
|   ----    |      ----      |   ----    |   ----     |  ----     |
|   label   |  计数器项的名称  |   String  |             |           |
|   value   |  计数器默认的值  |   Number  |            |            |
|    min    |  计数器最小值    |   Number  |             |           |
|    max    |  计数器最大值    |   Number  |             |           |
|    step   |计数器数值一次变化的大小|   Number  |         |           |
|    error  | 表单验证错误提示    |   Boolean  | true,false | false |
|  change   | 计数器数值改变时的回调函数，第一个参数为改变后的值，第二个参数为计数器的label。可绑定在counter组件，也可绑定在form组件上|   Function |  |  |
