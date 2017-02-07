import Vue from 'vue'
import ListItem from '../../../packages/listItem'

describe('ListItem.vue', () => {
    it('should render ListItem', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(ListItem, {
                    props: {
                        title: '列表标题'
                    }
                })
            }
        })

        expect(vm.$el.textContent.trim()).to.equal('列表标题')
    })
})
