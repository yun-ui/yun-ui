import Vue from 'vue'
import Counter from '../../../packages/counter'

describe('Counter.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Counter, {
                props: {
                    label: '计数器'
                }
            })
        }
    })
    const vm1 = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Counter, {
                props: {
                    label: '计数器',
                    min: '0',
                    max: '0'
                }
            })
        }
    })
    it('should render Counter', () => {
        expect(vm.$children[0].$el.textContent).to.include('计数器')
    })
    it('mothed emit event', () => {
        vm.$children[0].$on('change', (data, label) => {
            expect(label).to.equal('计数器')
        })
        vm1.$on('change', (data, label) => {
            expect(label).to.equal('计数器')
        })
        triggerEvent(vm.$children[0].$el.querySelector('.icon-delete-block'), 'click')
        triggerEvent(vm.$children[0].$el.querySelector('.icon-add-block'), 'click')
        triggerEvent(vm1.$children[0].$el.querySelector('.icon-delete-block'), 'click')
        triggerEvent(vm1.$children[0].$el.querySelector('.icon-add-block'), 'click')
    })
})
