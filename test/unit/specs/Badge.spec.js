import Vue from 'vue'
import Badge from '../../../packages/badge'

describe('Badge.vue', () => {
    it('should render Badge', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Badge, {
                    props: {
                        text: '徽章'
                    }
                })
            }
        })

        expect(vm.$el.textContent.trim()).to.equal('徽章')
    })
})
