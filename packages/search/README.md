# Search

搜索栏

### 引入

``` javascript
import Vue from 'vue'
import { Search } from 'yun-ui'
import 'yun-ui/dist/yun/Search/index.css'

Vue.component(Search.name, Search)
```

### 代码示例

``` javascript
<template>
    <y-search placeholder="输入以搜索" text="搜索" operation="取消" v-model="searchText" @operate="operation"></y-search>
</template>

<script>
    export default {
        data () {
            return {
                searchText: ''
            }
        },
        methods: {
            operation: function (val) {
                this.searchText = ''
            }
        }
    }
</script>
```

### API

|   参数  |   描述  |   类型  |   可选值   |   默认值   |
|   ----    |   ----   |   ----   |   ----    |   ----    |
|   text   |   搜索框初始状态时的提示文字   |   String   |       |       |
|   operation   |  操作文案    |   String  |       |       |
|   placeholder   |   聚焦时搜索输入框内的提示文字           | String |          |       | 
|   operate  |  搜索框输入更改时的回调函数，参数为改变后的值      | Function | | |
