const path = require('path');

module.exports = {
  clean: path.resolve(__dirname, `../${DEST}`),
  html: {
    src: path.resolve(__dirname, `../${SRC}/**/*.html`),
    dest: path.resolve(__dirname, `../${DEST}`)
  },
  copy: {
    src: path.resolve(__dirname, `../${SRC}/assets/images/**/*`),
    dest: path.resolve(__dirname, `../${DEST}/assets/images`)
  },
  style: {
    css: path.resolve(__dirname, `../${DEST}/assets/css/style.css`),
    map: path.resolve(__dirname, `../${DEST}/assets/css/style.css.map`)
  },
  sass: {
    file: path.resolve(__dirname, `../${SRC}/assets/sass/style.scss`),
    outputStyle: 'compressed'
  },
  postcss: {
    from: path.resolve(__dirname, `../${DEST}/assets/css/style.css`),
    to: path.resolve(__dirname, `../${DEST}/assets/css/style.css`),
    map: {
      inline: false
    }
  },
  watch: {
    html: path.resolve(__dirname, `../${SRC}/**/*.html`),
    sass: path.resolve(__dirname, `../${SRC}/assets/sass`),
    js: path.resolve(__dirname, `../${SRC}/assets/js`),
    images: path.resolve(__dirname, `../${SRC}/assets/images`)
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
    src: path.resolve(__dirname, `../${DEST}/assets/images/*.{jpg,png,gif,svg}`),
    dest: path.resolve(__dirname, `../${DEST}/assets/images`)
  },
  server: {
    server: path.resolve(__dirname, `../${DEST}`),
    ghostMode: {
      clicks: false,
      scroll: false,
      location: false,
      forms: false
    }
  }
};