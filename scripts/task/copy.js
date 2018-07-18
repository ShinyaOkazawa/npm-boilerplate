const config = require('../config');
const fs = require('fs-extra');
const util = require('../util');
const path = require('path');

module.exports = function(){
  return new Promise((resolve, reject)=>{
    try {
      const images = util.find(config.copy.src);
      images.forEach(function(image){
        fs.copySync(image, path.join(config.copy.dest, path.basename(image)));
      });
      console.log('copy images was successful.');
      resolve();
    } catch(err){
      console.error(err);
      reject();
    }
  });
};