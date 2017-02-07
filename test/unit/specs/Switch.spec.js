import Vue from 'vue'
import Switch from '../../../packages/switch'

describe('Switch.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Switch, {
                props: {
                    label: '开关'
                }
            })
        }
    })
    it('should render Switch', () => {
        expect(vm.$children[0].$el.textContent).to.include('开关')
    })
    it('mothed emit event', () => {
        vm.$children[0].$on('change', data => {
            expect(data).to.equal(false)
        })
        triggerEvent(vm.$children[0].$el.querySelector('input'), 'change')
    })
})
