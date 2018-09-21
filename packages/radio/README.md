# Radio

表单，单选框组件。

### 使用场景

用于表单中创建单选框。

> 搭配form组件使用。
> form是最基本的通用表单项组件容器，可用于包含表单项组件。仅作为语义化组件用，没有API，但可在其上监听form内组件的事件变化。

### 引入

``` javascript
import Vue from 'vue'
import {Form, Radio} from 'yun-ui'
import 'yun-ui/dist/yun/Form/index.css'
import 'yun-ui/dist/yun/Radio/index.css'

Vue.component(Form.name, Form)
Vue.component(Radio.name, Radio)
```

### 代码示例

``` javascript
<template>
<y-form>
    <y-radio :radioList="radioList" @change=""></y-radio>
</y-form>
</template>
<script>
export default {
    props: {},
    data () {
        return {
            radioList: [
                {
                    label: '单选框1',
                    secondaryText: '辅助文本',
                    value: '1',
                    name: 'radio'
                },
                {
                    label: '单选框2',
                    value: '1',
                    name: 'radio'
                },
                {
                    label: '单选框3',
                    checked: true,
                    value: '1',
                    name: 'radio'
                }
            ]
        }
    }
}
</script>
```

### API

|      参数      |    说明    |    类型    |       可选值    |      默认值   |
|     ----      |   ----     |   ----    |      ----      |     ----     |
|radioList|   传入的复选框项，每一项为一个对象  |   Array  |  |       |


### radioList

radioList内各个项需要传入的参数说明：

|      参数     |     说明        |    类型    |       可选值    |      默认值   |
|     ----     |     ----     |   ----    |      ----      |     ----     |
|     label    | 单选框项的标题名称  |   String  |              |              |
| secondaryText | 单选框项的二级标题名称 | String | ||
|     name    | 用于标识不同的单选列表  |   String  |              |              |
|     value     |  区分不同复选框的值         |   String  |             |               |
|    error  | 表单验证错误提示    |   Boolean  | true,false | false |
|    checked  | checkbox类型专用，用于区分不同菜单项  |   Boolean |  true,false  | false |
|    change   | 单选框选中状态改变时的回调函数，第一个参数为改变后的勾选状态，第二个参数为单选框的value值，若无，则为label。可绑定在radio组件，也可绑定在form组件上|   Function |  |  |
