const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  mode: "development",
  devServer: {
    static:{
      directory:path.join(__dirname, 'public'),
    },
    watchFiles:"true"
  }
};
