'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const path = require('path')
const vueLoaderConfig = require('./vueLoader.conf')
const MarkdownItContainer = require('markdown-it-container')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItFootnote = require('markdown-it-footnote')
const cheerio = require('cheerio')

function striptags(str, tags) {
    const $ = cheerio.load(str, {
        decodeEntities: false
    })
    if (!tags || tags.length === 0) {
        return str
    }
    tags = !Array.isArray(tags) ? [tags] : tags
    var len = tags.length

    while (len--) {
        $(tags[len]).remove()
    }
    return $.html()
}
const vueMarkdown = {
    preprocess: (MarkdownIt, source) => {
        MarkdownIt.renderer.rules.table_open = function() {
            return '<table class="table">'
        }
        return source
    },
    use: [
        [MarkdownItContainer, 'demo', {
            validate: params => params.trim().match(/^demo\s*(.*)$/),
            render: function(tokens, idx) {

                var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                    var desc = tokens[idx + 2].content;
                    const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
                    // 移除描述，防止被添加到代码块
                    tokens[idx + 2].children = [];

                    return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
                }
                return '</div></demo-block>\n';
            }
        }],
        [markdownItAnchor, {
            level: [1, 2, 3]
        }],
        markdownItFootnote
    ]
}

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const assetsRoot = resolve('docs/dist'),
    publicPath = '/',
    port = 9000,
    host = 'localhost'

const docWebpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './docs/main.js'
    },
    output: {
        path: assetsRoot,
        filename: '[name].js',
        publicPath: publicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('docs'),
            'assets': resolve('src/assets'),
            '$component': resolve('src/components/public')
        }
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('docs')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            ...utils.styleLoaders({
                sourceMap: true,
                usePostCSS: true
            }),
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: vueMarkdown
            }
        ]
    },
    // these devServer options should be customized in /config/index.js
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: host,
        port: port,
        // autoOpenBrowser
        open: false,
        overlay: {
            warnings: false,
            errors: true,
        },
        publicPath: publicPath,
        proxy: {},
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: false,
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
}

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
            // add port to devServer config
            docWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            docWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Document service has been started, please use your browser to open: http://${host}:${port}`],
                },
                onErrors: undefined
            }))

            resolve(docWebpackConfig)
        }
    })
})
