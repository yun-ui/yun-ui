var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')

var webpackConfig
switch ( process.env.NODE_ENV ) {
    case "testing":
        console.info("load webpack.prod.conf")
        webpackConfig = require('./webpack.prod.conf')
        break;
    case "dev_demo":
        console.info("load webpack.demo.conf")
        webpackConfig = require('./webpack.demo.dev.conf.js')
        break;
    default:
        console.info("load webpack.dev.conf")
        webpackConfig = require('./webpack.dev.conf')
        break;
}
var NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "dev"

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config[NODE_ENV].port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config[NODE_ENV].proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if ( typeof options === 'string' ) {
        options = { target: options }
    }
    app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config[NODE_ENV].assetsPublicPath, config[NODE_ENV].assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
    if ( err ) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
    opn(uri)
})
