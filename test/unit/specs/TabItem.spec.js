import Vue from 'vue'
import TabItem from '../../../packages/tabItem'

describe('TabItem.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(TabItem, {
                props: {
                    tabId: '1'
                }
            }, ['Hello Vue!'])
        }
    })
    it('should render TabItem', () => {
        expect(vm.$children[0].$el.textContent.trim()).to.equal('Hello Vue!')
    })
    it('mothed emit event', () => {
        vm.$on('click', data => {
            expect(data).to.equal('1')
        })
        triggerEvent(vm.$children[0].$el, 'click')
    })
})
