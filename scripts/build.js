require('./global');

const clean = require('./task/clean');
const copy = require('./task/copy');
const imagemin = require('./task/imagemin');
const style = require('./task/style');
const script = require('./task/script');

async function main(){
  await clean();
  await copy();
  // await imagemin();
  style();
  script();
}

main();