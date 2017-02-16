import Vue from 'vue'
import Input from '../../../packages/input'

describe('Input.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Input, {
                props: {
                    label: '单行输入框',
                    defaultValue: 'a'
                }
            })
        }
    })
    it('should render Input', () => {
        expect(vm.$children[0].$el.textContent).to.include('单行输入框')
    })
    it('data change emit event', done => {
        vm.$children[0].$on('change', data => {
            expect(data).to.equal('b')
            done()
        })
        vm.$children[0].value = 'b'
    })
})
