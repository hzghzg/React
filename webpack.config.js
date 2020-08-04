const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const htmlPlugin=new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename: 'index.html'
})
module.exports = {
    mode: 'development',//有两种模式，development和production
    //在webpack4.x中，需要额外装webpack-cli，且约定大于配置，默认的打包入口路径是src目录下的index
    plugins: [htmlPlugin],
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}