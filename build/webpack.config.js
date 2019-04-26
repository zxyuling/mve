const path = require('path');
module.exports = {
  entry: {
  	index:'./example/index.js',
  },
  //devtool:'eval-source-map',
  mode:'none',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
      extensions: ['.js', '.ts', '.json'],
      alias: {
        'type': path.resolve('__dirname', '../types')
      }
  },
  devServer: {
	  contentBase: './dist',
    hot:true
	},
  module:{
  	rules:[
	    {
	        test: /\.ts$/,
	         exclude: /node_modules/, 
	         //loader: "./loader.js"
           use:["babel-loader","ts-loader"]
	    }
	  ],
  },
};