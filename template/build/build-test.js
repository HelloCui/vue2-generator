// https://github.com/shelljs/shelljs
require('./check-versions')()
var jsonfile = require('jsonfile')
var cubeModule =  require('../CubeModule.json')
process.env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.test.conf')

var spinner = ora('building for test...')

// 对调测试、正式版本号
var swapVersion = function() {
  var temp = cubeModule.version
  cubeModule.version = cubeModule.testVersion
  cubeModule.testVersion = temp
  jsonfile.writeFileSync(path.join(__dirname, '../CubeModule.json'), cubeModule, {spaces: 2})
}
swapVersion()
spinner.start()

var assetsPath = path.join(config.buildTest.assetsRoot, config.buildTest.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.config.silent = true
//cp('-R', 'CubeModule.json', config.build.assetsRoot)
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
  swapVersion()
  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
