module.exports = {
  context: __dirname + '/src',
  entry: {
    html: './index.html',
    javascript: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
