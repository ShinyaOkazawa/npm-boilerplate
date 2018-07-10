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
  }
};