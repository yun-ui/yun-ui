# Tabbar

底部选项卡。`建议选项不超过4个，文本不超过8个字符`

<span style="color:orange">*注：推荐选项卡图标直接使用iconfont</span>

------

### 例子
依赖 `tab-item` 组件

``` bash
<yun-tabbar>
<yun-tab-item><i class="iconfont icon-sina"></i>新浪</yun-tab-item>
<yun-tab-item><i class="iconfont icon-tongshiquan"></i>同事圈</yun-tab-item>
<yun-tab-item><i class="iconfont icon-pengyouquan"></i>朋友圈</yun-tab-item>
<yun-tab-item><i class="iconfont icon-qq"></i>QQ</yun-tab-item>
</yun-tabbar>
```
固定在页面底部
``` bash
<yun-tabbar fixed></yun-tabbar>
```
API
| 参数        | 描述        | 类型        | 可选值       | 默认值       |
| ----       | ----       | ----       | ----       | ----       |
| fixed       | 定位 |  Boolean  | | false |