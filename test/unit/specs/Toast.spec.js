import Vue from 'vue'
import Toast from '../../../packages/toast'
Vue.use(Toast)

describe('Toast.vue', () => {
    const vm = new Vue({
        el: document.createElement('div')
    })
    it('Toast should be Vue plugin ', () => {
        expect(typeof vm.$toast).to.equal('function')
    })
    it('Toast should return a promise', () => {
        expect(vm.$toast()).to.be.instanceof(Promise)
    })
})
