

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // devtool: 'cheap-module-source-map',
    devServer: {
    publicPath: "/static/",
    stats: { colors: true },
    port: 3000,
    inline: true
    // hot:true
  },
  // plugins:[
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  resolve:{
    extensions:["",".js",".jsx"]
  }
};
