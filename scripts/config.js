const path = require('path');

module.exports = {
  copy: {
    src: `${SRC}/assets/images/**/*`,
    dest: `${DEST}/assets/images`
  },
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
    mode: 'production',
    entry: path.resolve(__dirname, `../${SRC}/assets/js/app.js`),
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, `../${DEST}/assets/js`)
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  },
  imagemin: {
    src: `${DEST}/assets/images/*.{jpg,png,gif,svg}`,
    dest: `${DEST}/assets/images`
  }
};