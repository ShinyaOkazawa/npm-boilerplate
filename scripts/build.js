require('./global');

const clean = require('./clean');
const style = require('./style');
const script = require('./script');
const imagemin = require('./imagemin');




function main(){
  clean();
  style();
  script();
  // productionビルドの時だけ行う
  // imagemin();
}

main();