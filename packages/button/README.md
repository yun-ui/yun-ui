# Button

按钮，根据尺寸和状态提供了几种基础样式。

------

### 例子

默认按钮
``` bash
<yun-button type="normal">normal</yun-button>
```
线性按钮
``` bash
<yun-button type="inverse">inverse</yun-button>
```
改变大小
``` bash
<yun-button size="large">large</yun-button>
<yun-button size="middle">middle</yun-button>
<yun-button size="small">small</yun-button>
```
禁用按钮
``` bash
<yun-button disabled>disabled</yun-button>
```
API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| type   | 按钮形态 | String  | normal，inverse | normal |
| size       | 尺寸   | String   | large,middle,small | large |
| disabled       | 禁用状态 |  Boolean  | | false |