import '../packages/style/stylesheets/base.less'
import button from '../packages/button'
import toast from '../packages/toast'
import tabbar from '../packages/tabbar'
import tabItem from '../packages/tabItem'
import buttonGroup from '../packages/buttonGroup'
import navbar from '../packages/navbar'
import popup from '../packages/popup'
import form from '../packages/form'
import Checkbox from '../packages/checkbox'
import Counter from '../packages/counter'
import Input from '../packages/input'
import radio from '../packages/radio'
import Switch from '../packages/switch'
import textarea from '../packages/textarea'
// import formItem from '../packages/formItem'
import listContainer from '../packages/listContainer'
import listItem from '../packages/listItem'
import loading from '../packages/loading'
import badge from '../packages/badge'
import search from '../packages/search'
import actionSheet from '../packages/actionSheet'

const install = function (Vue) {
    if (install.installed) return
    Vue.component(button.name, button)
    Vue.component(tabbar.name, tabbar)
    Vue.component(tabItem.name, tabItem)
    Vue.component(buttonGroup.name, buttonGroup)
    Vue.component(navbar.name, navbar)
    Vue.component(popup.name, popup)
    Vue.component(form.name, form)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Counter.name, Counter)
    Vue.component(Input.name, Input)
    Vue.component(radio.name, radio)
    Vue.component(Switch.name, Switch)
    Vue.component(textarea.name, textarea)
    // Vue.component(formItem.name, formItem)
    Vue.component(listContainer.name, listContainer)
    Vue.component(listItem.name, listItem)
    Vue.component(loading.name, loading)
    Vue.component(badge.name, badge)
    Vue.component(search.name, search)
    Vue.component(actionSheet.name, actionSheet)
    Vue.use(toast)
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
    form,
    Checkbox,
    Counter,
    Input,
    radio,
    Switch,
    textarea,
    // formItem,
    listContainer,
    listItem,
    loading,
    badge,
    search,
    actionSheet
}
