module.exports = {
  entry: './entry.js',

  

  output: {
    filename: './bundle.js'
  },

  module: {
    loaders: [
      {test:'/\.js$/', exclude:/node_modules/, loaders:['babel-loader']},
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  },

  devtool: '#source-map'
}