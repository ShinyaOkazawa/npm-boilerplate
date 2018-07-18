require('./global');
const config = require('./config');
const chokidar = require('chokidar');
const copy = require('./task/copy');
const style = require('./task/style');
const script = require('./task/script');
const html = require('./task/html');
const bs = require('browser-sync').create();

function main() {
  bs.init(config.server);

  chokidar.watch(config.watch.html, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    html().then(()=>{
      bs.reload('*.html');
    });
  });
  chokidar.watch(config.watch.sass, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    style().then(()=>{
      bs.reload('*.html');
    });
  });
  chokidar.watch(config.watch.js, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    script().then(()=>{
      bs.reload('*.html');
    });
  });
  chokidar.watch(config.watch.images, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true
  }).on('all', (event, path) => {
    console.log(event, path);
    copy().then(()=>{
      bs.reload('*.html');
    });
  });


};

main();