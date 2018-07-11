const config = require('./config');
const fs = require('fs-extra');
const webpack = require('webpack');

module.exports = function() {
  const compiler = webpack(config.webpack);
  
  compiler.run(function(err, stats) {
    fs.outputFileSync(`${DEST}/assets/js/app.js`, stats.compilation.assets['app.js'].source());
  });
};