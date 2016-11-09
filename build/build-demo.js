// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'demo_production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.demo.prod.conf')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for demo production...\n')
spinner.start()

var assetsPath = path.join(config.demo_prod.assetsRoot, config.demo_prod.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/demo/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if ( err ) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
})
