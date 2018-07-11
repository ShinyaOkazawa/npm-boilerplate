const path = require('path');

module.exports = {
  sass: {
    file: `${SRC}/assets/sass/style.scss`,
    outputStyle: 'compressed'
  },
  postcss: {
    from: `${DEST}/assets/css/style.css`,
    to: `${DEST}/assets/css/style.css`,
    map: {
      inline: false
    }
  },
  webpack: {
    entry: path.resolve(__dirname, `../${SRC}/assets/js/app.js`),
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, `../${DEST}/assets/js`)
    }
  }
};