import Vue from 'vue'
import Textarea from '../../../packages/textarea'

describe('Textarea.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Textarea, {
                props: {
                    defaultValue: 'a',
                    limit: 1
                }
            })
        }
    })
    it('should render Textarea', () => {
        expect(vm.$children[0].$el.textContent).to.include('1')
    })
    it('data change emit event', done => {
        vm.$children[0].$on('change', data => {
            expect(data).to.equal('b')
            done()
        })
        vm.$children[0].value = 'bb'
    })
})
