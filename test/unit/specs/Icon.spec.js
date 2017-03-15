import Vue from 'vue'
import Icon from '../../../packages/icon'

describe('Icon.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Icon, {
                props: {
                    type: 'qq'
                }
            })
        }
    })
    const component = vm.$children[0]
    const container = component.$el

    it('should render Icon', () => {
        expect(container.className).to.include('icon-qq')
    })
})
