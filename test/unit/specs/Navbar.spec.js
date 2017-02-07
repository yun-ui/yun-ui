import Vue from 'vue'
import Navbar from '../../../packages/navbar'

describe('Navbar.vue', () => {
    it('should render Navbar', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Navbar, {}, ['Hello Vue!'])
            }
        })

        expect(vm.$el.textContent).to.equal('Hello Vue!')
    })
})
