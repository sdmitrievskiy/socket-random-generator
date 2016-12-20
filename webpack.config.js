'use strict';

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './public/'
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, "src")]
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            use: [{
              loader: "babel-loader",
              options: { presets: ["es2015"] }
            }]
        },
        {
            test: /\.styl$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }
    ]
  }


}
