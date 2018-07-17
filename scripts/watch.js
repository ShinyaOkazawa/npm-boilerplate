const config = require('./config');
const fs = require('fs-extra');
const chokidar = require('chokidar');

module.exports = function() {
  chokidar.watch(config.watch.sass, {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    console.log(event, path);
  });
  chokidar.watch(config.watch.js, {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    console.log(event, path);
  });
  chokidar.watch(config.watch.images, {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    console.log(event, path);
  });
};