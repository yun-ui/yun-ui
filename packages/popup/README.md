# Popup

弹出窗。

### 使用场景

常用于 操作提醒 和 确认操作，另外可作为宣传弹窗用。

### 引入

### 例子

确认类弹窗 （标题 + 文本内容）
``` javascript
<yun-popup title="标题" content="文本内容">
    <yun-button-group slot="buttonGroup">
        <yun-tab-item title="取消"></yun-tab-item>
        <yun-tab-item class="active" title="确认"></yun-tab-item>
    </yun-button-group>
</yun-popup>
```

输入类弹窗 （标题 + 单行/多行输入框）
``` javascript
<yun-popup title="标题" input="input">
    <yun-button-group slot="buttonGroup">
        <yun-tab-item title="取消"></yun-tab-item>
        <yun-tab-item class="active" title="确定"></yun-tab-item>
    </yun-button-group>
</yun-popup>
```

按钮弹窗 （标题 + 文本 + 按钮）
``` javascript
<yun-popup title="标题" content="文本内容">
    <yun-button size="large" type="normal" slot="button">文本</yun-button>
    <yun-button size="large" type="normal" disabled slot="button">文本</yun-button>
    <yun-button-group slot="buttonGroup">
        <yun-tab-item title="知道了"></yun-tab-item>
    </yun-button-group>
</yun-popup>
```

宣传弹窗 （标题 + 列表 + 封面图片）
``` javascript
<yun-popup title="标题" :textList="textListArray">
    <img src="../assets/popup-cover.png" slot="cover"/>
    <yun-button-group slot="buttonGroup">
        <yun-tab-item title="知道了"></yun-tab-item>
        <yun-tab-item class="active" title="了解更多"></yun-tab-item>
    </yun-button-group>
</yun-popup>
```

### API

|   参数  |   描述  |   类型  |   可选值 |   默认值 |
|   ----    |   ----    |   ----    |   ----    |   ----    |
|   title   |   标题文字    |   String  |   |   title 中的填写值 |
|   content |   内容文本    |   String  |   |   content中的填写值    |
|   input   |   输入框类型  |   String  |    input,textarea      |   -   |
|   :textList|   输入文字列表  |   Array   |       |  :textList   中传入的数组对象    |

### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   cover   |   封面图片    |
|   button  |   加入按钮    |
|   buttonGroup |   在底部加入按钮组   |