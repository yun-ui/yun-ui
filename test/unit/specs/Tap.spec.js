import Vue from 'vue'
import Tap from '../../../packages/tap'

describe('Tap.vue', () => {
    const textContent = 'text content'
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Tap, {
                props: {
                    disabled: false
                }
            }, textContent)
        }
    })
    const component = vm.$children[0]
    const container = component.$el

    it('should render Tap', () => {
        expect(container.textContent).to.equal(textContent)
    })
})
