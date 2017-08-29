var path = require('path')
var utils = require('./utils')

var projectRoot = path.resolve(__dirname, '../')
{{#if_eq vux true}}
const vuxLoader = require('vux-loader')
{{/if_eq}}

var config = require('../config')
var vueLoaderConfig = require('./vueLoader.conf')
var webpack = require("webpack")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const webpackConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components')
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}

{{#if_eq vux true}}
module.exports = vuxLoader.merge(webpackConfig, {
    plugins: [{
            name: 'vux-ui'
        },
        {
            name: 'duplicate-style'
        }
    ]
})
{{/if_eq}}
{{#if_eq vux false}}
module.exports = webpackConfig
{{/if_eq}}
