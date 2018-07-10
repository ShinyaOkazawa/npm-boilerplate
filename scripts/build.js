require('./global');

const clean = require('./clean');
const style = require('./style');




function main(){
  clean();
  style();
}

main();