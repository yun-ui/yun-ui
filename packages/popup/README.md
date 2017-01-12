# Popup

弹出窗。

### 使用场景

常用于 操作提醒 和 确认操作，另外可作为宣传弹窗用。

### 引入

``` javascript
import Vue from 'vue'
import {Popup} from 'yun-ui'
import 'yun-ui/dist/yun/Popup/index.css'

Vue.component(Popup.name, Popup)
```

### 代码示例

确认类弹窗 （标题 + 文本内容）
``` javascript
<y-popup title="标题" content="文本内容">
    <y-button-group slot="buttonGroup">
        <y-tab-item title="取消"></y-tab-item>
        <y-tab-item class="active" title="确认"></y-tab-item>
    </y-button-group>
</y-popup>
```

输入类弹窗 （标题 + 单行/多行输入框）
``` javascript
<y-popup title="标题" input="input">
    <y-button-group slot="buttonGroup">
        <y-tab-item title="取消"></y-tab-item>
        <y-tab-item class="active" title="确定"></y-tab-item>
    </y-button-group>
</y-popup>
```

按钮弹窗 （标题 + 文本 + 按钮）
``` javascript
<y-popup title="标题" content="文本内容">
    <y-button size="large" type="normal" slot="button">文本</y-button>
    <y-button size="large" type="normal" disabled slot="button">文本</y-button>
    <y-button-group slot="buttonGroup">
        <y-tab-item title="知道了"></y-tab-item>
    </y-button-group>
</y-popup>
```

宣传弹窗 （标题 + 列表 + 封面图片）
``` javascript
<y-popup title="标题" :textList="textListArray">
    <img src="../assets/popup-cover.png" slot="cover"/>
    <y-button-group slot="buttonGroup">
        <y-tab-item title="知道了"></y-tab-item>
        <y-tab-item class="active" title="了解更多"></y-tab-item>
    </y-button-group>
</y-popup>
```

### API

|   参数  |   描述  |   类型  |   可选值 |   默认值 |
|   ----    |   ----    |   ----    |   ----    |   ----    |
|   title   |   标题文字    |   String  |   | |
|   content |   内容文本    |   String  |   |  |
|   input   |   输入框类型  |   String  |    input,textarea      |    |
|   textList|   输入文字列表项，每一项为对象  |   Array   |     |   |

### textList

textList内各个项需要传入的参数说明：

|      参数      |    说明    |    类型    |       可选值    |      默认值   |
|     ----      |   ----     |   ----    |      ----      |     ----     |
|     content   |   输入的文字列表项的值 |   String  |  |       |

### Slot

|   参数  |   描述  |
|   ----    |   ----    |
|   cover   |   封面图片    |
|   button  |   加入按钮    |
|   buttonGroup |   在底部加入按钮组   |

> 可嵌入ButtonGroup组件使用，ButtonGroup使用方法请参考[ButtonGroup文档](../buttonGroup/README.md)