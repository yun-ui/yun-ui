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
function isConfigedRoute (path) {
    let result = false
    routes.route.map(route => {
        // 对子路由的判断
        if (route.children) {
            route.children.map(child => {
                if (route.path + '/' + child.path === path) {
                    result = true
                }
            })
        }
        if (route.path === path) {
            result = true
        }
    })
    return result
}
router.beforeEach((to, from, next) => {
    // 只有在路由表中配置了的路径（含children子路由）才能跳转，否则不进行导航
    if (isConfigedRoute(to.path)) {
        next()
    }
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
        window.parent.postMessage({ demoUrl: location.href }, '*')
    }
}, false)
