const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.jsx',
  devtool: 'source-map',
  output:{
    path: __dirname, 
    filename: 'space-invaders.js'
  },
  module: { 
    loaders:[
      {
        test: /.jsx?$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
