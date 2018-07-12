require('./global');

const clean = require('./clean');
const style = require('./style');
const script = require('./script');
const imagemin = require('./imagemin');
const copy = require('./copy');

async function main(){
  await clean();
  await copy();
  await imagemin();
  style();
  script();
}

main();