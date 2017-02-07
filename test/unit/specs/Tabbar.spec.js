import Vue from 'vue'
import Tabbar from '../../../packages/tabbar'

describe('Tabbar.vue', () => {
    it('should render Tabbar', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Tabbar, {}, ['Hello Vue!'])
            }
        })
        expect(vm.$el.textContent).to.equal('Hello Vue!')
    })
})
