import Vue from 'vue'
import Radio from '../../../packages/radio'

describe('Radio.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Radio, {
                props: {
                    radioList: [
                        {
                            label: '单选框',
                            value: '1',
                            name: 'radio'
                        }
                    ]
                }
            })
        }
    })
    it('should render Radio', () => {
        expect(vm.$children[0].$el.textContent).to.include('单选框')
    })
    it('mothed emit event', () => {
        vm.$children[0].$on('change', data => {
            expect(data).to.equal(false)
        })
        triggerEvent(vm.$children[0].$el.querySelector('input'), 'change')
    })
})
