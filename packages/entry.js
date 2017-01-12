import '../packages/style/stylesheets/base.less'
import Button from '../packages/button'
import Toast from '../packages/toast'
import Tabbar from '../packages/tabbar'
import TabItem from '../packages/tabItem'
import ButtonGroup from '../packages/buttonGroup'
import Navbar from '../packages/navbar'
import Popup from '../packages/popup'
import Form from '../packages/form'
import Checkbox from '../packages/checkbox'
import Counter from '../packages/counter'
import Input from '../packages/input'
import Radio from '../packages/radio'
import Switch from '../packages/switch'
import Textarea from '../packages/textarea'
import ListContainer from '../packages/listContainer'
import ListItem from '../packages/listItem'
import Loading from '../packages/loading'
import Badge from '../packages/badge'
import Search from '../packages/search'
import ActionSheet from '../packages/actionSheet'

const install = function (Vue) {
    if (install.installed) return
    Vue.component(Button.name, Button)
    Vue.component(Tabbar.name, Tabbar)
    Vue.component(TabItem.name, TabItem)
    Vue.component(ButtonGroup.name, ButtonGroup)
    Vue.component(Navbar.name, Navbar)
    Vue.component(Popup.name, Popup)
    Vue.component(Form.name, Form)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Counter.name, Counter)
    Vue.component(Input.name, Input)
    Vue.component(Radio.name, Radio)
    Vue.component(Switch.name, Switch)
    Vue.component(Textarea.name, Textarea)
    Vue.component(ListContainer.name, ListContainer)
    Vue.component(ListItem.name, ListItem)
    Vue.component(Loading.name, Loading)
    Vue.component(Badge.name, Badge)
    Vue.component(Search.name, Search)
    Vue.component(ActionSheet.name, ActionSheet)
    Vue.use(Toast)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Button,
    Toast,
    Tabbar,
    TabItem,
    ButtonGroup,
    Navbar,
    Popup,
    Form,
    Checkbox,
    Counter,
    Input,
    Radio,
    Switch,
    Textarea,
    ListContainer,
    ListItem,
    Loading,
    Badge,
    Search,
    ActionSheet
}
