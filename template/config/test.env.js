var merge = require('webpack-merge')
var devEnv = require('./prod.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  type: 1
})
