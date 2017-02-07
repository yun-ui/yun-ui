import Vue from 'vue'
import Loading from '../../../packages/loading'

describe('Loading.vue', () => {
    it('should render Loading', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Loading, {
                    props: {
                        show: true,
                        content: '加载中'
                    }
                })
            }
        })

        expect(vm.$el.textContent.trim()).to.equal('加载中')
    })
})
