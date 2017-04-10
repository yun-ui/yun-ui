# Checkbox

表单，复选框组件。

### 使用场景

用于表单中创建复选框。

> 搭配form组件使用。
> form是最基本的通用表单项组件容器，可用于包含表单项组件。仅作为语义化组件用，没有API，但可在其上监听form内组件的事件变化。

### 引入

``` javascript
import Vue from 'vue'
import {Form, Checkbox} from 'yun-ui'
import 'yun-ui/dist/yun/Form/index.css'
import 'yun-ui/dist/yun/Checkbox/index.css'

Vue.component(Form.name, Form)
Vue.component(Checkbox.name, Checkbox)
```

### 代码示例

``` javascript
<template>
<y-form>
    <y-checkbox :checkboxList="checkList" @change="change" v-model="checkedList"></y-checkbox>
</y-form>
</template>
<script>
export default {
    props: {},
    data () {
        return {
            checkList: [
                {
                    label: '复选框1',
                    value: '1'
                },
                {
                    label: '复选框2',
                    value: '2'
                },
                {
                    label: '复选框3',
                    value: '3'
                }
            ],
            checkedList: ['2']
        }
    },
    methods: {
        change: function (value, label) {
            console.log(value，label)
        }
    }
}
</script>
```

### API

|      参数      |    说明    |    类型    |       可选值    |      默认值   |
|     ----      |   ----     |   ----    |      ----      |     ----     |
|checkboxList|   传入的复选框项，每一项为一个对象  |   Array  |  |       |

### v-model

传入数组，为已勾选的项的value值，如上例，若需"复选框2"、"复选框3"默认勾选，则v-model中传入`['2','3']`

### checkboxList

checkboxList内各个项需要传入的参数说明：

|      参数     |     说明        |    类型    |       可选值    |      默认值   |
|     ----     |     ----     |   ----    |      ----      |     ----     |
|     label    | 复选框项的标题名称  |   String  |              |              |
|     value     |  区分不同复选框的值         |   String  |             |               |
|    error  | 表单验证错误提示    |   Boolean  | true,false | false |
|    change   | 复选框选中状态改变时的回调函数，第一个参数为改变后的勾选状态，第二个参数为复选框的value值，若无，则为label。可绑定在checkbox组件，也可绑定在form组件上|   Function |  |  |
