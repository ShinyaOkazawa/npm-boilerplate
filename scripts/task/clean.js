const config = require('../config');
const fs = require('fs-extra');

module.exports = function() {
  return new Promise((resolve, reject)=>{
    try {
      fs.removeSync(`${DEST}`);
      resolve();
    } catch(err){
      console.error(err);
      reject();
    }
  });
};