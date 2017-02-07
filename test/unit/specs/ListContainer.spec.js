import Vue from 'vue'
import ListContainer from '../../../packages/listContainer'

describe('ListContainer.vue', () => {
    it('should render ListContainer', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(ListContainer, {}, ['Hello Vue!'])
            }
        })

        expect(vm.$el.textContent).to.equal('Hello Vue!')
    })
})
