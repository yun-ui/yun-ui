import Vue from 'vue'
import MobileInput from '../../../packages/mobileInput'

describe('MobileInput.vue', () => {
    const placeholderText = 'placeholder text'
    const defaultValue = '138'
    const validValue = '13800001111'
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(MobileInput, {
                props: {
                    placeholder: placeholderText,
                    defaultValue: defaultValue
                }
            })
        }
    })
    const component = vm.$children[0]
    const container = component.$el
    const input = container.querySelector('input')
    const close = container.querySelector('div.icon-close-block')

    it('should render MobileInput', () => {
        expect(input.getAttribute('placeholder')).to.equal(placeholderText)
    })

    it('should have default value', () => {
        expect(input.value).to.equal(defaultValue)
    })

    it('should not valid when value is "' + defaultValue + '"', () => {
        expect(component.valid).to.equal(false)
    })

    it('should emit "change" event and be valid', done => {
        component.$on('change', (data, e) => {
            // new value
            expect(data).to.equal(validValue)
            // e.valid = true
            expect(e.valid).to.equal(true)
            done()
        })
        component.value = validValue
    })

    it('should show the close icon when value is not empty string', () => {
        expect(close.style.display).to.not.equal('none')
    })
})
