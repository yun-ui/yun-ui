import Vue from 'vue'
import Button from '../../../packages/button'

describe('Button.vue', () => {
    it('should render Button', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Button, {}, ['Hello Vue!'])
            }
        })

        expect(vm.$el.textContent).to.equal('Hello Vue!')
    })
})
