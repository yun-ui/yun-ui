import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route.js'
import Yun from '../dist/yun/'
import '../dist/yun/index.css'
import './css/demo-css.less'

/* eslint-disable no-new */
console.log('demo entry load!')
Vue.use(Yun)

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes.route
})

const app = new Vue({ // eslint-disable-line
    router
}).$mount('#app')

window.addEventListener('message', function (e) {
    if (e.source !== window.parent) {
        return
    }
    if (e.data.redirectName) {
    	router.push({ path: `/${e.data.redirectName}` })
    }
    if (e.data.type && e.data.type === 'GETCURRENTURL') {
    	window.parent.postMessage({demoUrl: location.href}, '*')
    }
}, false)
