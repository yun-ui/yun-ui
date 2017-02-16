import Vue from 'vue'
import Popup from '../../../packages/popup'

describe('Popup.vue', () => {
    it('should render Popup', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render (h) {
                return h(Popup, {
                    props: {
                        show: true,
                        title: 'Hello Vue!',
                        content: 'test content'
                    }
                })
            }
        })
        expect(vm.$el.textContent).to.include('Hello Vue!')
        expect(vm.$el.textContent).to.include('test content')
    })
})
