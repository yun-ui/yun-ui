<script>
import Text from '../../textInput'
import {UIName} from 'mixins'

export default {
    name: 'y-mobile-input',
    mixins: [UIName],
    extends: Text,
    props: {
        placeholder: {
            default: '请输入手机号码'
        },
        maxlength: {
            default: '11'
        },
        validPattern: {
            default: '^1\\d{10}$'
        },
        pattern: {
            default: '^1\\d{0,10}$'
        }
    }
}
</script>