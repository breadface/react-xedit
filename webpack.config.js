var BUILD_DIR = 'build'

module.exports  = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['','.js', '.jsx', '.scss']
  },
  devServer: {
    contentBase: BUILD_DIR,
    colors: true,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
