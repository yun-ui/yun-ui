import RouteConfig from './route.config'

const registerRoute = config => {
    let route = []
    config.map(nav =>
        nav.list.map(page =>
            route.push({
                path: page.path,
                component: require(`./pages${page.path}`),
                name: page.name,
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

export default route
