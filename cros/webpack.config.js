var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devServer: { // 代理服务 跨域
  //   proxy: { //代理 什么开头的url 以api开头的url
  //     '/api': { // 表示将webpack的服务，http://localhost:8080转成http://localhost:3000
  //       target: "http://localhost:3000",
  //       pathRewrite: { '/api': '' }
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}