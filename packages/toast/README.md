# Toast

提示框。

### 例子

图文提示
``` javascript
<yun-toast content="操作成功">
    <img src="../assets/success.png" slot="icon" />
</yun-toast>
```

底部提示
``` javascript
<yun-toast content="操作成功" bottom></yun-toast>
```

### API

| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| content |   提示文本  |   String  |       |       |
| bottom |   固定在底部标记  |   Boolean  |       |       |

### Slot

| 参数        | 描述        |
| ----       | ----       |
| icon |   图标  |
