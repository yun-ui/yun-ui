import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route.js'
import Yun from '../dist/yun/'
import '../dist/yun/index.css'

console.log(Yun)

/* eslint-disable no-new */
console.log('demo entry load!')
Vue.use(Yun)

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

const app = new Vue({ // eslint-disable-line
    router
}).$mount('#app')
