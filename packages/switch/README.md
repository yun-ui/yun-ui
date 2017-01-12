# Switch

表单，开关组件。

### 使用场景

用于表单中创建开关型按钮。

> 搭配form组件使用。
> form表单组件的用法，请参考[form文档](../form/README.md)

### 引入

``` javascript
import Vue from 'vue'
import {Form, Switch} from 'yun-ui'
import 'yun-ui/dist/yun/Form/index.css'
import 'yun-ui/dist/yun/Switch/index.css'

Vue.component(Form.name, Form)
Vue.component(Switch.name, Switch)
```

### 代码示例

``` javascript
<template>
<y-form @change="">
    <y-switch label="开关"></y-switch>
</y-form>
</template>
```

### API

|      参数      |    说明    |    类型    |       可选值    |      默认值   |
|     ----      |   ----     |   ----    |      ----      |     ----     |
|   label   |  开关项的名称  |   String  |             |           |
|  checked   |   开关默认勾选状态   |   Boolean  |    true,false  |   false    |
|    error  | 表单验证错误提示    |   Boolean  | true,false | false |
|   change   | 开关勾选状态改变时的回调函数，第一个参数为改变后的值，第二个参数为开关的label。可绑定在switch组件，也可绑定在form组件上|   Function |  |  |
