var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var Components = require('../components.json')

var env = process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : config.build.env

var webpackConfig = []
webpackConfig.push(merge(baseWebpackConfig, {
    entry: Components,
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('[name]/index.js'),
        //chunkFilename: utils.assetsPath('[name]/[id].[chunkhash].js')
        chunkFilename: utils.assetsPath('[id].js'),
        libraryTarget: "umd"
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    externals:{
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('[name]/index.css')),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        /*new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'testing'
                ? 'index.html'
                : config.build.index,
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })*/
    ]
}))


webpackConfig.push(merge(baseWebpackConfig, {
    entry: {
        app: ['./packages/entry.js']
    },
    output: {
        path: config.build.assetsRoot,
        filename: 'index.js',
        //chunkFilename: utils.assetsPath('[name]/[id].[chunkhash].js')
        chunkFilename:'[id].js',
        libraryTarget:'umd'
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    externals:{
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        new ExtractTextPlugin('index.css'),
    ]
}))

console.log(JSON.stringify(webpackConfig[1]))

/*if ( config.build.productionGzip ) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}*/

module.exports = webpackConfig
