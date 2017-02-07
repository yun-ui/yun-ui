import Vue from 'vue'
import Checkbox from '../../../packages/checkbox'

describe('Checkbox.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Checkbox, {
                props: {
                    checkboxList: [{
                        label: '复选框1',
                        value: '1'
                    }, {
                        label: '复选框2'
                    }]
                }
            })
        }
    })
    it('should render Checkbox', () => {
        expect(vm.$children[0].$el.textContent).to.include('复选框1')
        expect(vm.$children[0].$el.textContent).to.include('复选框2')
    })
    it('mothed emit event', () => {
        vm.$children[0].$on('change', data => {
            expect(data).to.equal(false)
        })
        vm.$on('change', data => {
            expect(data).to.equal(false)
        })
        triggerEvent(vm.$children[0].$el.querySelector('input'), 'change')
        triggerEvent(vm.$children[0].$el.querySelectorAll('input')[1], 'change')
    })
})
