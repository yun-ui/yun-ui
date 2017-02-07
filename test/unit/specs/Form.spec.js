import Vue from 'vue'
import Form from '../../../packages/form'

describe('Form.vue', () => {
    it('should render Form', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Form, {}, ['Hello Vue!'])
            }
        })

        expect(vm.$el.textContent).to.equal('Hello Vue!')
    })
})
