const config = require('./config');
const cpx = require('cpx');

module.exports = async function(){
  try {
    cpx.copySync(config.copy.src, config.copy.dest);
    console.log('copy images was successful.');
  } catch(err){
    console.error(err);
  }
};