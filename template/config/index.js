// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
{{#if_eq platform "cordova"}}
var pageInfo = require('../CubeModule.json');
{{/if_eq}}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

{{#if_eq platform "cordova"}}
function getZipName(type) {
    var d = new Date();
    var year = d.getFullYear();
    var month = checkTime(d.getMonth() + 1);
    var day = checkTime(d.getDate());
    var hour = checkTime(d.getHours());
    var minute = checkTime(d.getMinutes());
    var mode = type === 2 ? '-pro' : '-test';
    var ver = type === 2 ? pageInfo.version : pageInfo.testVersion;
    return pageInfo.name + '-' + ver + mode + '-' + year + month + day + hour + minute + '.zip';
}
{{/if_eq}}

module.exports = {
    buildTest: {
        {{#if_eq platform "cordova"}}
        zipName: getZipName(1),
        {{/if_eq}}
        env: require('./test.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    build: {
        {{#if_eq platform "cordova"}}
        zipName: getZipName(2),
        {{/if_eq}}
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}
