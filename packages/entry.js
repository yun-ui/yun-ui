import button from '../packages/button'
import toast from '../packages/toast'
import tabbar from '../packages/tabbar'
import tabItem from '../packages/tabItem'
import buttonGroup from '../packages/buttonGroup'
import navbar from '../packages/navbar'
import popup from '../packages/popup'
import cellContainer from '../packages/cellContainer'
import cellItem from '../packages/cellItem'
import loading from '../packages/loading'

const install = function (Vue) {
    if (install.installed) return
    Vue.component(button.name, button)
    Vue.component(toast.name, toast)
    Vue.component(tabbar.name, tabbar)
    Vue.component(tabItem.name, tabItem)
    Vue.component(buttonGroup.name, buttonGroup)
    Vue.component(navbar.name, navbar)
    Vue.component(popup.name, popup)
    Vue.component(cellContainer.name, cellContainer)
    Vue.component(cellItem.name, cellItem)
    Vue.component(loading.name, loading)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    button,
    toast,
    tabbar,
    tabItem,
    buttonGroup,
    navbar,
    popup,
    cellContainer,
    cellItem,
    loading
}
