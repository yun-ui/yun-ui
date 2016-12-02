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
console.log(routes)
const router = new VueRouter({
    mode: 'history',
    routes: routes.route
})

const app = new Vue({ // eslint-disable-line
    router
}).$mount('#app')
