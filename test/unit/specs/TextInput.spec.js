import Vue from 'vue'
import TextInput from '../../../packages/textInput'

describe('TextInput.vue', () => {
    const placeholderText = 'placeholder text'
    const defaultValue = '123'
    const validPattern = '^\\d{6}$'
    const validValue = '123456'
    const vm = new Vue({
        el: document.createElement('div'),
        render (h) {
            return h(TextInput, {
                props: {
                    placeholder: placeholderText,
                    defaultValue: defaultValue,
                    validPattern: validPattern
                }
            })
        }
    })
    const component = vm.$children[0]
    const container = component.$el
    const input = container.querySelector('input')
    const close = container.querySelector('div.icon-close-block')

    it('should render TextInput', () => {
        expect(input.getAttribute('placeholder')).to.equal(placeholderText)
    })

    it('should have default value', () => {
        expect(input.value).to.equal(defaultValue)
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
