<template>
    <div>
        <div class="title">
            <h3 class="yun-h3">List 列表</h3>
            <p>YunUI 提供了一套可定制的单元格组件，用于复杂列表展示，比如常见的：
                <strong>图文混排列表</strong>、<strong>链接列表</strong>
                、<strong>单行文本列表</strong>、<strong>多行文本列表</strong>。</p>
            <div>

            </div>
        </div>
        <div class="content cell">
            <h4 class="yun-h4">单行文本列表</h4>
            <div class="row">
                <y-list-container>
                    <y-list-item title="列表标题" secondaryText="辅助文本">
                    </y-list-item>
                    <y-list-item title="列表标题" secondaryText="辅助文本" link>
                    </y-list-item>

                    <y-list-item title="列表标题">
                        <img src="../../demo/assets/demo.png" slot="iconLeft">
                    </y-list-item>
                    <y-list-item title="列表标题" link>
                        <img src="../../demo/assets/demo.png" slot="iconLeft">
                    </y-list-item>
                    <y-list-item title="列表标题" secondaryText="辅助文本">
                        <img src="../../demo/assets/demo.png" slot="iconRight">
                    </y-list-item>

                    <y-list-item title="列表标题" secondaryText="辅助文本" link>
                        <img src="../../demo/assets/demo.png" slot="iconRight">
                    </y-list-item>
                </y-list-container>
            </div>
            <h4 class="yun-h4">多行文本列表</h4>
            <div class="row">
                <y-list-container class="multi-items">
                    <y-list-item title="列表标题" secondaryText="辅助文本" multi>
                    </y-list-item>

                    <y-list-item title="列表标题" secondaryText="辅助文本" multi link>
                    </y-list-item>

                    <y-list-item title="列表标题" secondaryText="辅助文本" multi link>
                        <img src="../../demo/assets/demo.png" slot="icon">
                    </y-list-item>

                    <y-list-item title="列表标题" secondaryText="辅助文本" multi link> 
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </y-list-item>
                    <y-list-item title="列表标题" secondaryText="辅助文本" multi avatar link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </y-list-item>

                    <y-list-item title="列表标题" secondaryText="辅助文本" multi link>
                        <img src="../../demo/assets/placeholder-figure.png" slot="img">
                    </y-list-item>
                </y-list-container>
            </div>
            <h4 class="yun-h4">特殊列表</h4>
            <div class="row">
                <y-list-container>
                    <y-list-item title="列表一级标题" first></y-list-item>
                    <y-list-item title="列表二级标题" link secondaryText="辅助文本"></y-list-item>
                    <y-list-item title="列表二级标题" link secondaryText="辅助文本"></y-list-item>
                </y-list-container>
            </div>
            <div class="row">
                <y-list-container>
                    <y-list-item title="列表标题" secondaryText="辅助文本" multi link assist="辅助文本分栏"> 
                        <img src="../../demo/assets/demo.png" slot="img">
                    </y-list-item>
                </y-list-container>
            </div>
             <div class="row" v-show="itemDelete">
                <y-list-container>
                    <y-list-item title="示例字段(1)" secondaryText="删除" :itemStyle="itemAddStyle" @operate="deleteItem"></y-list-item>
                    <y-list-item title="示例字段" link secondaryText="请选择"></y-list-item>
                    <y-list-item title="示例字段" link secondaryText="请选择"></y-list-item>
                    <y-list-item title="示例字段" link secondaryText="请选择"></y-list-item>
                    <y-form :class="[{'input-area': !itemsShow}]">
                        <y-input label="示例字段" placeholder="请输入" class="lines"></y-input>
                    </y-form>
                    <div @click="addItems" v-show="!itemsShow">
                        <y-list-item title="添加请假明细" add :itemStyle="itemAddStyle"></y-list-item>
                    </div>
                </y-list-container>
            </div>
            <div class="row" v-show="itemsShow">
                <y-list-container>
                    <y-list-item title="示例字段(2)" secondaryText="删除" :itemStyle="itemAddStyle"></y-list-item>
                    <y-list-item title="示例字段" link secondaryText="请选择"></y-list-item>
                    <y-list-item title="示例字段" link secondaryText="请选择"></y-list-item>
                    <y-list-item title="示例字段" link secondaryText="请选择"></y-list-item>
                    <y-form class="input-area">
                        <y-input label="示例字段" placeholder="请输入" class="lines"></y-input>
                    </y-form>
                    <y-list-item :items="itemData"></y-list-item>
                    <div class="seperate"></div>
                    <y-list-item title="添加请假明细" add :itemStyle="itemAddStyle"></y-list-item>
                </y-list-container>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list-demo',
        created () {
            console.log('list demo loaded')
        },
        data () {
            return {
                itemsShow: false,
                itemData: [
                    '请假总天数： 0.00',
                    '请假总时长： 0.00'
                ],
                itemAddStyle: {
                    color: 'rgb(253, 163, 43)'
                },
                itemDelete: true
            }
        },
        methods: {
            addItems: function () {
                this.itemsShow = true
            },
            deleteItem: function () {
                this.itemDelete = false
            }
        }
    }

</script>

<style lang="less">
    .cell{
        .yun-list-item:last-child:after{
            display: none;
        }
        .multi-items { 
            .yun-list-item:last-child:after{
                display: block;
            }
            div:last-child{
                .yun-list-item:after {
                    display: none;
                } 
            } 
        }
        .input-area {
            position: relative;
            .lines:after {
                position: absolute;
                bottom: 0;
                left: 12px;
                display: block;
                border-bottom: 1px solid #dce1e8;
                transform: scaleY(.5);
                -webkit-transform: scaleY(.5);
            }
        }
        .seperate {
            width: 100%;
            height: 1px;
            margin-left: 12px;
            border-bottom: 1px solid #dce1e8;
            transform: scaleY(.5);
            -webkit-transform: scaleY(.5);
        }
    }
</style>
