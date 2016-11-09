import RouteConfig from './route.config.json'

const registerRoute = config => {
    let route = []
    config.map(nav =>
        nav.list.map(page =>
            route.push({
                path: page.path,
                component: require(`./pages${page.path}`),
                meta: {
                    title: page.title || page.name,
                    description: page.description
                }
            })
        )
    )
    return { route, nav: config }
}

const route = registerRoute(RouteConfig)

route.route.push({
    path: '/',
    component: require('./App.vue')
})

export const nav = route.nav
export default route.route
