var webpack = require('webpack')
var merge = require('webpack-merge')

var TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET;

var common = {
  context: __dirname + '/src',
  entry: {
    html: './index.html',
    javascript: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    }
  })
}
