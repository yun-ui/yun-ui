import button from '../packages/button'
import toast from '../packages/toast'
import tabbar from '../packages/tabbar'
import tabItem from '../packages/tabItem'
import buttonGroup from '../packages/buttonGroup'
import navbar from '../packages/navbar'
import popup from '../packages/popup'
import cellContainer from '../packages/cellContainer'
import cellItem from '../packages/cellItem'
import listContainer from '../packages/listContainer'
import listItem from '../packages/listItem'
import loading from '../packages/loading'
import Switch from '../packages/switch'
import badge from '../packages/badge'
import search from '../packages/search'
import counter from '../packages/counter'
import checkbox from '../packages/checkbox'
import popMenu from '../packages/popMenu'

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
    Vue.component(listContainer.name, listContainer)
    Vue.component(listItem.name, listItem)
    Vue.component(loading.name, loading)
    Vue.component(Switch.name, Switch)
    Vue.component(badge.name, badge)
    Vue.component(search.name, search)
    Vue.component(counter.name, counter)
    Vue.component(checkbox.name, checkbox)
    Vue.component(popMenu.name, popMenu)
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
    listContainer,
    listItem,
    loading,
    Switch,
    badge,
    search,
    counter,
    checkbox,
    popMenu
}
