const config = require('../config');
const fs = require('fs-extra');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = async function() {
  try {
    // sass compile
    const sassResult = await compileSass();
    console.log('sass compile was successful.');
    
    // autoprefix
    const autoPrefixResult = await addAutoPrefix(sassResult.css);
    console.log('autoprefixer was successful.');

    console.log(config.style.css);
    console.log(config.style.map);
    
    fs.outputFileSync(config.style.css, autoPrefixResult.css);
    if ( autoPrefixResult.map ) {
      fs.outputFileSync(config.style.map, autoPrefixResult.map);
    }
  } catch (err) {
    console.log(err);
  }
};

function compileSass(){
  return new Promise((resolve, reject) => {
    try {
      const result = sass.renderSync(config.sass);
      resolve(result);
    } catch(err) {
      reject(err);
    }
  });
}

function addAutoPrefix(data){
  return new Promise((resolve, reject) => {
    try {
      postcss([autoprefixer])
      .process(data, config.postcss)
      .then(result => {
        resolve(result);
      });
    } catch(err){
      reject(err);
    }
  });
}