import Vue from 'vue'
import ButtonGroup from '../../../packages/buttonGroup'

describe('ButtonGroup.vue', () => {
    it('should render ButtonGroup', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(ButtonGroup, {}, ['Hello Vue!'])
            }
        })
        expect(vm.$el.textContent).to.equal('Hello Vue!')
    })
})
