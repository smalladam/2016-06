var path = require('path');
var webpack = require('webpack');
//console.log(webpack); //可以看到都安了什么有很多东西
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        // publicPath: "/static/",
        stats: {
            colors: true,
            hot: true
        },
        port: 3000,
        inline: true,
        hot:true,
        historyApiFallback:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-module-source-map', //  相当于 webpack -d 让出错的地方可以找到
    resolve: {
        extensions: ["", ".js", ".jsx"], //不用写后缀，他会自己依次匹配
    },
    module: {   //编译es6
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
      test: /\.css/,
      loader: 'style!css'
    },
        {
      test: /\.(jpe?g|png)$/,
      loader: 'file-loader'
    }
      ]
    }

}
