import Vue from 'vue'
import ActionSheet from '../../../packages/actionSheet'

describe('ActionSheet.vue', () => {
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(ActionSheet, {
                props: {
                    show: true,
                    type: 'panel',
                    panelTitle: '操作面板',
                    actionSheetItem: [
                        {
                            title: '测试'
                        }
                    ]
                }
            })
        }
    })
    it('should render ActionSheet', () => {
        expect(vm.$children[0].$el.textContent).to.include('操作面板')
        expect(vm.$children[0].$el.textContent).to.include('测试')
    })
    it('mothed should not throw Error', () => {
        expect(vm.$children[0].checkboxChange).to.not.throw(Error)
    })
})
