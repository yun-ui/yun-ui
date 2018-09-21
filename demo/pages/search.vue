<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">搜索 Search</h3>
            <p>YunUI 统一搜索组件。</p>
        </div>
        <div class="content">
            <div class="row clearContentPadding">
                <y-search placeholder="输入以搜索" text="搜索" operation="取消" v-model="searchText" @operate="operation"></y-search>
            </div>
        </div>
    </div>
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

<style lang="less">

</style>
