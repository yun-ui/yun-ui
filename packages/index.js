import Vue from 'vue'
import yunButton from './button'
import yunToast from './toast'
import yunTabbar from './tabbar'
import yunTabItem from './tabItem'
import yunButtonGroup from './buttonGroup'
import yunNavbar from './navbar'
import yunPopup from './popup'
import yunForm from './form'
import yunFormGroup from './formGroup'
import yunFormItem from './formItem'
import yunListContainer from './listContainer'
import yunListItem from './listItem'
import yunLoading from './loading'
import yunSwitch from './switch'
import yunBadge from './badge'
import yunSearch from './search'
import yunCounter from './counter'
import yunCheckbox from './checkbox'
import yunActionSheet from './actionSheet'

Vue.use(yunToast)

const Components = {
    yunButton,
    yunTabbar,
    yunTabItem,
    yunButtonGroup,
    yunNavbar,
    yunPopup,
    yunForm,
    yunFormGroup,
    yunFormItem,
    yunListContainer,
    yunListItem,
    yunLoading,
    yunSwitch,
    yunBadge,
    yunSearch,
    yunCounter,
    yunCheckbox,
    yunActionSheet
}

module.exports = Components
