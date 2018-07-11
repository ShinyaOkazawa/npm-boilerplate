const config = require('./config');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
 
module.exports = function(){
  imagemin([config.imagemin.src], config.imagemin.dest, {
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: '65-80' }),
      imageminGifsicle(),
      imageminSvgo()
    ]
  }).then(() => {
      console.log('Images optimized');
  });
};
