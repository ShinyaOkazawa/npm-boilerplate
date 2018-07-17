const config = require('./config');
const fs = require('fs-extra');
const util = require('./util');
const path = require('path');

module.exports = async function(){
  const images = util.find(config.copy.src);
  try {
    images.forEach(function(image){
      fs.copySync(image, path.join(config.copy.dest, path.basename(image)));
    });
    console.log('copy images was successful.');
  } catch(err){
    console.error(err);
  }  
};