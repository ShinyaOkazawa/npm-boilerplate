const config = require('../config');
const fs = require('fs-extra');
const util = require('../util');
const path = require('path');

module.exports = async function(){
  const files = util.find(config.html.src);
  // console.log(files);
  
  try {
    files.forEach(function(file){
      fs.copySync(file, path.join(config.html.dest, path.basename(file)));
    });
    console.log('copy html was successful.');
  } catch(err){
    console.error(err);
  }  
};