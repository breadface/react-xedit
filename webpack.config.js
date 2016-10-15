

module.exports  = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['','.js', '.jsx', '.scss']
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
