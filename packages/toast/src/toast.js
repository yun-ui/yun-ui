import {extend} from 'src/utils/helpers'
import yunToast from './toast.vue'

let defaultOptions = {
    content: '操作成功',
    duration: 1000
}

function ToastInstall (Vue) {
    let ToastConstructor = Vue.extend(yunToast)
    let toastInstance = null
    Object.defineProperty(Vue.prototype, '$toast', {
        get: function () {
            return function (options) {
                let toastDom = document.querySelector('.yun-toast')
                if (toastDom) {
                    toastDom.remove()
                }
                return new Promise(function (resolve, reject) {
                    if (toastInstance) {
                        toastInstance.$destroy(true)
                    }
                    options = extend(extend({}, defaultOptions), options)
                    toastInstance = new ToastConstructor({
                        el: document.createElement('div'),
                        data: options
                    })
                    document.body.appendChild(toastInstance.$el)
                    setTimeout(function () {
                        toastInstance.$el.remove()
                        resolve()
                    }, options.duration)
                })
            }.bind(this)
        }
    })
}

export default ToastInstall
