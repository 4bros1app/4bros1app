var webpack = require('webpack');
var path = require('path');
var bundleDir = path.join(__dirname, 'public/bundled');
var appDir= path.join(__dirname, 'public/app');
var config = {
  entry: appDir + '/index.jsx',
  output: {
    path: bundleDir,
    filename: 'bundle.js'
  },
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : appDir,
        loader : 'babel'
      }
    ]
  }
};
module.exports = config;
