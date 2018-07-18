const config = require('../config');
const fs = require('fs-extra');
const util = require('../util');
const path = require('path');

module.exports = function(){
  return new Promise((resolve, reject)=>{
    try {
      const files = util.find(config.html.src);
      files.forEach(function(file){
        fs.copySync(file, path.join(config.html.dest, path.basename(file)));
      });
      console.log('copy html was successful.');
      resolve();
    } catch(err){
      console.error(err);
      reject();
    }
  });
};