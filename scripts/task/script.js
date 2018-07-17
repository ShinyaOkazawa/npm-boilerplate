const config = require('../config');
const fs = require('fs-extra');
const webpack = require('webpack');

module.exports = function() {
  const compiler = webpack(config.webpack);
  
  compiler.run(function(err, stats) {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }
  
    const info = stats.toJson();
  
    if (stats.hasErrors()) {
      console.error(info.errors);
    }
  
    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    fs.outputFileSync(`${DEST}/assets/js/app.js`, stats.compilation.assets['app.js'].source());
    console.log('webpack was successful.');
  });
};