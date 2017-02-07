import Vue from 'vue'
import Search from '../../../packages/search'

describe('Search.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(Search, {
                props: {
                    text: '搜索框'
                }
            })
        }
    })
    it('should render Search', () => {
        expect(vm.$children[0].$el.textContent).to.include('搜索框')
    })
    it('mothed should not throw Error', () => {
        vm.$children[0].inputValue = 'a'
        expect(vm.$children[0].handleClick).to.not.throw(Error)
        expect(vm.$children[0].handleBlur).to.not.throw(Error)
        expect(vm.$children[0].resetSearch).to.not.throw(Error)
        expect(vm.$children[0].handleBlur).to.not.throw(Error)
    })
    it('data change emit event', done => {
        vm.$children[0].$on('search', data => {
            expect(data).to.equal('a')
            done()
        })
        vm.$children[0].inputValue = 'a'
    })
})
