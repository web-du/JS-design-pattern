const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        // 意思是用bbel-loader检验除node_modules文件夹下的js文件，把es6转化为es5
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        // 会把打包之后的文件插入当前配置的模板中运行
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    // 安装完webpack-dev-Server后再配置devServer
    // 在webpack的官网指南模块开发下可以查看具体的意思
    // 最后可以添加一个 script 脚本，可以直接运行开发服务器(dev server)：
    devServer: {
        contentBase: path.join(__dirname,'./release'), //根目录：告诉开发服务器(dev server)，在哪里查找文件：
        open: true, // 自动打开浏览器
        port: 9000  // 端口号
    }
}