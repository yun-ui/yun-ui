# Badge

YunUI 提供一套简介的统一标记样式，用于标注状态，提醒。 我们还支持用户自定义颜色（这里推荐使用官方配色）。


###  例子

默认

``` javascript
<yun-badge></yun-badge>
```

文本

``` javascript
<yun-badge type="text" value="100+"></yun-badge>
```

改变颜色

``` javascript
<yun-badge color="#AF65DF"></yun-badge>
```


### API

|    参数    |    描述     |    类型    |       可选值    |      默认值   |
|   ----    |    ----    |    ----   |      ----      |     ----     |
|     -     |   默认      |     -     |         -      |       -      |
|    type   |   徽章形态   |   String  |     dot,text   |       dot    |
|   value   |   提示文本   |   String  |                |    text的文本 |
|   color   |   徽章颜色   |   String  |                |   color的颜色 |