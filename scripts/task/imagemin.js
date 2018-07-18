const config = require('../config');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
 
module.exports = function(){
  return new Promise((resolve, reject)=>{
    try {
      imagemin([config.imagemin.src], config.imagemin.dest, {
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: '65-80' }),
          imageminGifsicle(),
          imageminSvgo()
        ]
      }).then(() => {
          console.log('Images optimized');
          resolve();
      });
    } catch(err) {
      console.error(err);
      reject();
    }
  });
};
