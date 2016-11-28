# ButtonGroup

按钮组，通过按钮组容器把一组按钮放在同一行里。`建议按钮不超过4个，文本不超过8个字符`

<span style="color:orange">*注：推荐带图标的按钮直接使用iconfont</span>

------

### 例子
依赖 `tab-item` 组件使用

纯本文按钮组
``` bash
<yun-button-group>
<yun-tab-item>按钮1</yun-tab-item>
<yun-tab-item>按钮2</yun-tab-item>
<yun-tab-item>按钮3</yun-tab-item>
<yun-tab-item>按钮4</yun-tab-item>
</yun-button-group>
```
纯图标按钮组
``` bash
<yun-button-group>
<yun-tab-item><i class="iconfont icon-sina"></i></yun-tab-item>
<yun-tab-item><i class="iconfont icon-tongshiquan"></i></yun-tab-item>
<yun-tab-item><i class="iconfont icon-pengyouquan"></i></yun-tab-item>
<yun-tab-item><i class="iconfont icon-qq"></i></yun-tab-item>
</yun-button-group>
```
图文混排按钮组
``` bash
<yun-button-group>
<yun-tab-item><i class="iconfont icon-sina"></i>按钮1</yun-tab-item>
<yun-tab-item><i class="iconfont icon-tongshiquan"></i>按钮2</yun-tab-item>
<yun-tab-item><i class="iconfont icon-pengyouquan"></i>按钮3</yun-tab-item>
<yun-tab-item><i class="iconfont icon-qq"></i>按钮4</yun-tab-item>
</yun-button-group>
```
固定在页面底部
``` bash
<yun-button-group fixed></yun-button-group>
```
API
| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| fixed       | 定位 |  Boolean  | | false |

