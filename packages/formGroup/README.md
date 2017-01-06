# Form

通用表单项组件容器。

### 使用场景

最基本的表单项组件的容器，可用于包含表单项组件，比如：单选框组件（radio）、
复选框组件（checkbox）、文本输入组件（input | textarea）等。

> 注：仅作为语义化组件用，没有API

### 引入

``` javascript

// 如果你已经引入了全部的YunUI组件，忽略import
import Form from 'YunUI/dist/yun/Form'
import 'YunUI/dist/yun/Form/index.css'
export default {
    components:{
        Form
    }
}
</script>
```

### 例子

``` javascript
<yun-form>
    <p>Cell item 1</p>
    <p>Cell item 2</p>
</yun-form>
```