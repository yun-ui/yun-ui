import button from '../packages/button'
import toast from '../packages/toast'

let Yun = {}

const install = function (Vue) {
    if (install.installed) return
    Vue.component(button.name, button)
    Vue.component(toast.name, toast)
}

Yun = {
    button,
    toast
}

console.log(Yun)

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    button,
    toast
}
