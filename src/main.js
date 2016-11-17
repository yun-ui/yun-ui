import Vue from 'vue'
import App from './App.vue'
/* eslint-disable no-new */
console.info('src entry load!')
new Vue({
    el: '#app',
    render: h => h(App)
})
