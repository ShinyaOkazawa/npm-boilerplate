require('./global');
const config = require('./config');
const chokidar = require('chokidar');
const copy = require('./task/copy');
const style = require('./task/style');
const script = require('./task/script');

function main() {
  chokidar.watch(config.watch.sass, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    style();
  });
  chokidar.watch(config.watch.js, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    script();
  });
  chokidar.watch(config.watch.images, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    copy();
  });
};

main();