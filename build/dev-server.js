require('./check-versions')() // 检查npm & node版本
var config = require('../config') // 获取config/index.js配置，分别有config.build 和config.dev
// 配置生产环境
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path') // 原生路径模块
var express = require('express') // 使用express
var webpack = require('webpack') // 使用webpack
var opn = require('opn') // 强制打开浏览器模块
var proxyMiddleware = require('http-proxy-middleware') // http代理中间件，用于解决跨域问题
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
// 端口配置
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// 设置proxy
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

// 启动服务器
var app = express()
// 启动webpack编译
var compiler = webpack(webpackConfig)

// 热重载
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})
// hot-reload
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
// 把proxyTbale 中的请求配置挂载express
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
// 使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 将暂存在内存上的webpack编译后的文件挂在express上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
// 设置静态路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// 启动服务器，监听端口
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  // 测试的话就不打开了
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
