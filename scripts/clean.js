const config = require('./config');
const fs = require('fs-extra');

module.exports = function() {
  fs.removeSync(`${DEST}`);
};