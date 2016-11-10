import Vue from 'vue'
import Components from '../packages/'
/* eslint-disable no-new */
console.info('src entry load!')
new Vue({
    el: '#app',
    render: h => h(Components.button)
})
