<template>
    <div :class="UIName+'-calendar'">
        <div :class="UIName+'-calendar-mask'"></div>
        <div :class="UIName+'-calendar-pannel'">
            <div :class="UIName+'-calendar-header'">
                <span class="iconfont icon-close"></span>
                <span :class="UIName+'-calendar-commit'">确定</span>
            </div>
            <div :class="UIName+'-calendar-count'">
                <span class="iconfont icon-arrow-left" :class="UIName+'-calendar-count-click'"></span>
                <span :class="UIName+'-calendar-count-value'">2017年3月</span>
                <span class="iconfont icon-arrow-right" :class="UIName+'-calendar-count-click'"></span>
            </div>
            <div :class="UIName+'-calendar-content'">
                <div :class="UIName+'-calendar-month'">
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-disabled']">1月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-disabled']">2月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-active']">3月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">4月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">5月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">6月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">7月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">8月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">9月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">10月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="UIName+'-calendar-value'">11月</div>
                    </div>
                    <div :class="UIName+'-calendar-month-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-active']">12月</div>
                    </div>
                </div>

                <div :class="UIName+'-calendar-day'">
                    <div :class="UIName+'-calendar-day-header'">
                        <ul>
                            <li>日</li>
                            <li>一</li>
                            <li>二</li>
                            <li>三</li>
                            <li>四</li>
                            <li>五</li>
                            <li>六</li>
                        </ul>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-disabled']">28</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-disabled']">29</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-disabled']">30</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">1</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">2</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">3</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">4</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">5</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-active']">6</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-active']">7</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-active']">8</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">9</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">10</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value',UIName+'-calendar-value-active']">11</div>
                    </div>
                    <div :class="UIName+'-calendar-day-item'">
                        <div :class="[UIName+'-calendar-value']">12</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {UIName} from 'mixins'
    export default{
        name: 'y-calendar',
        mixins: [UIName],
        components: {}
    }
</script>

<style lang="less" scoped>
    @import "../../style/stylesheets/calendar";
</style>