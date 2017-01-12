# Form

通用表单项组件容器。

### 使用场景

最基本的表单项组件的容器，可用于包含表单项组件，比如：单选框组件（radio）、
复选框组件（checkbox）、文本输入组件（input | textarea）等。

> 注：仅作为语义化组件用，没有API，但可在其上监听form内组件的事件变化。

### 引入

``` javascript
import Vue from 'vue'
import {Form} from 'yun-ui'
import 'yun-ui/dist/yun/Form/index.css'

Vue.component(Form.name, Form)
```

### 代码示例

``` javascript
<y-form @change="change">
    <p>Cell item 1</p>
    <p>Cell item 2</p>
</y-form>
```
具体change回调方法的参数值，请参考具体组件的文档说明。

### 表单组件

1. [复选框checkbox](../checkbox/README.md)
2. [计数器counter](../counter/README.md)
3. [单行输入框input](../input/README.md)
4. [单选框radio](../radio/README.md)
5. [开关switch](../switch/README.md)
6. [多行输入框textarea](../textarea/README.md)