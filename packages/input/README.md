# Input

表单，单行输入框组件。

### 使用场景

用于表单中创建单行输入框。

> 搭配form组件使用。
> form表单组件的用法，请参考[form文档](../form/README.md)

### 引入

``` javascript
import Vue from 'vue'
import {Form, Input} from 'yun-ui'
import 'yun-ui/dist/yun/Form/index.css'
import 'yun-ui/dist/yun/Input/index.css'

Vue.component(Form.name, Form)
Vue.component(Input.name, Input)
```

### 代码示例

``` javascript
<template>
<y-form @change="">
    <y-input label="单行输入框" placeholder="placeholder"></y-input>
    <y-input label="单行输入框" placeholder="placeholder" align="right"></y-input>
</y-form>
</template>
```

### API

|    参数    |      说明      |    类型    |   可选值    |   默认值   |
|   ----    |      ----      |   ----    |   ----     |  ----     |
|   label   |  输入框项的名称  |   String  |             |           |
|defaultValue|   输入框初始值   |   String  |            |            |
|placeholder|  输入框的placeholder|   String  |             |   |
|align|  输入框内的文字对齐方式，默认为左对齐|   String  | right |   |
|    error  | 表单验证错误提示    |   Boolean  | true,false | false |
|  change   | 输入框输入改变时的回调函数，第一个参数为改变后的值，第二个参数为输入框的label。可绑定在input组件，也可绑定在form组件上|   Function |  |  |
