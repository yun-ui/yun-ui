import Vue from 'vue'
import yButton from './button'
import yToast from './toast'
import yTabbar from './tabbar'
import yTabItem from './tabItem'
import yButtonGroup from './buttonGroup'
import yNavbar from './navbar'
import yPopup from './popup'
import yForm from './form'
import yTextarea from './textarea'
import yInput from './input'
import yRadio from './radio'
import yCheckbox from './checkbox'
// import yFormItem from './formItem'
import yListContainer from './listContainer'
import yListItem from './listItem'
import yLoading from './loading'
import ySwitch from './switch'
import yBadge from './badge'
import ySearch from './search'
import yCounter from './counter'
import yActionSheet from './actionSheet'
import yCalendar from './calendar'
import yImagePicker from './imagePicker'
import yFilePicker from './filePicker'

Vue.use(yToast)

const Components = {
    yImagePicker,
    yFilePicker,
    yButton,
    yTabbar,
    yTabItem,
    yButtonGroup,
    yNavbar,
    yPopup,
    yForm,
    yTextarea,
    yInput,
    yRadio,
    yCheckbox,
    // yFormItem,
    yListContainer,
    yListItem,
    yLoading,
    ySwitch,
    yBadge,
    ySearch,
    yCounter,
    yActionSheet,
    yCalendar
}

module.exports = Components
