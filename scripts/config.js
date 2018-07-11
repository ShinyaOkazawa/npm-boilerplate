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
    src: path.resolve(__dirname, `../${SRC}/assets/images/*.{jpg,png,gif,svg}`),
    dest: path.resolve(__dirname, `../${DEST}/assets/images`)
  }
};