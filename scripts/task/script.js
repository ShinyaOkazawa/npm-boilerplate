const config = require('../config');
const fs = require('fs-extra');
const webpack = require('webpack');

module.exports = function() {
  return new Promise((resolve, reject)=>{
    try {
      const compiler = webpack(config.webpack);

      compiler.run(function(err, stats) {
        if(err){
          throw new Error(err);
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
        resolve();
      });
    } catch(err){
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      reject();
    }
  });
};