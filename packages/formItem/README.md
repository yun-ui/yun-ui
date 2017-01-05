# FormItem

表单项组件。

### 例子

``` javascript
<yun-form>

    <yun-form-item type="input" label="单行输入框" placeholder="placeholder"></yun-form-item>

    <yun-form-item type="textarea" placeholder="多行输入框"></yun-form-item>

    <yun-form-item type="counter" label="计数器"></yun-form-item>

    <yun-form-item type="switch" label="开关列表"></yun-form-item>

    <yun-form-item type="checkbox" label="复选框"></yun-form-item>

    <yun-form-item type="radio" label="单选框"></yun-form-item>

    <yun-form-item type="imagePicker" label="照片选择器" text="已选择5张">
        <img src="../src/assets/placeholder-figure.png" slot="image">
    </yun-form-item>

    <yun-form-item type="filePicker" label="选择附件" text="已选择2个" fileName="文件名称"
                   errorInfo="上传失败，点击重传" fileSize="9.2M/20M" uploadTime="12月25日 13:22 星期五">
        <img src="../src/assets/placeholder-figure.png" slot="fileIcon">
    </yun-form-item>
</yun-form>
```

### API

|   参数  |   描述  |   类型  |   可选值   |   默认值   |
|   ----    |   ----   |   ----   |   ----    |   ----    |
|   type    |   表单类型    |   String   |  input,textarea,counter,switch,radio,checkbox,imagePicker,filePicker |   |
|   label   |   表单标签    |   String   |      |   label中的传入值  |
|   text    |   照片选择器和附件选择器的提示文本  | String  |       |   text中传入的值   |
|   placeholder |   输入类型的表单输入框占位文本   |   String  |       |   placeholder中传入的值   |
|   errorInfo   |   表单错误信息  |   String  |       |   errorInfo中传入的值  |
|   fileSize    |   上传文件的大小     |    String  |       |       |
|   fileName    |   上传文件的名字     |   String  |       |       |
|   uploadTime  |   文件上传完成的时间   |   String  |       |       |

### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   fileIcon    |   上传的文件的类型图标  |
|   image    |   上传的图片  |