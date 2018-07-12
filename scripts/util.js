const glob = require('glob');

module.exports = {
  find: function(pattern){
    return glob.sync(pattern);
  }
};