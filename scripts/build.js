require('./global');

const clean = require('./clean');
const style = require('./style');
const script = require('./script');
const imagemin = require('./imagemin');
const copy = require('./copy');
const watch = require('./watch');

async function main(){
  // await clean();
  // await copy();
  // await imagemin();
  // style();
  // script();
  watch();
}

main();