<style scoped>
    div.y-text-input-container{
        width: 100%;
        display: flex;
        background-color: #FFF;
        font-size: 1em;
        padding: 5px;
    }
    input.y-text-input{
        border: none;
        outline: none;
        flex: 1;
        overflow: hidden;
        background-color: transparent;
    }
    .y-text-input-close-icon{
        padding: 0 0 0 10px;
        font-size: 1.2em;
    }
</style>

<template>
    <div class="y-text-input-container">

        <!--文本输入框-->
        <input class="y-text-input" :style="inputStyle" type="tel" pattern="[0-9]*" :maxlength="maxlength" 
            :placeholder="placeholder" v-model="value" @keyup="keyup($event)" />

        <!--清除按钮-->
        <icon class="y-text-input-close-icon" type="close-block" 
            v-show="value.length > 0"
            @tap="clear"></icon>
    </div>
</template>

<script>
import {UIName} from 'mixins'

// 创建检测函数
function createTester (pattern) {
    var reg

    if (typeof pattern === 'function') {
        return pattern
    } else if (typeof pattern === 'string' && pattern !== '') {
        try {
            reg = new RegExp(pattern)

            if (reg) {
                return function (val) {
                    return this.test(val)
                }.bind(reg)
            }
        } catch (e) {}
    }

    return null
}

export default {
    name: 'y-text-input',
    mixins: [UIName],
    components: {
        'icon': require('../../icon')
    },
    props: {
        placeholder: {
            default: '请输入文本'
        },
        defaultValue: {
            default: ''
        },
        maxlength: {
            default: '20'
        },
        validPattern: [String, Function],
        pattern: [String, Function],
        inputStyle: String
    },
    data: function () {
        return {
            valid: false,
            value: this.$props.defaultValue
        }
    },
    computed: {
        validPatternReg: function () {
            return createTester(this.validPattern)
        },
        patternReg: function () {
            return createTester(this.pattern)
        }
    },
    watch: {
        // 当value发生变化，用validPattern函数去检测，并设置组件的valid状态
        value: function (val, oldValue) {
            if (typeof this.validPatternReg === 'function') {
                this.valid = this.validPatternReg(val)
            }

            this.$emit('change', {
                value: val,
                oldValue: oldValue,
                valid: this.valid
            })
        }
    },
    methods: {
        clear: function () {
            this.value = ''
        },
        keyup: function (e) {
            var val = e.target.value

            if (typeof this.patternReg === 'function' && !this.patternReg(val)) {
                e.target.value = val.substr(0, val.length - 1)
            }
        }
    }
}
</script>