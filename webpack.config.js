const path = require('path');

module.exports = {
  entry: {
    simple: './src/index.js',
    full: './src/index_full.js',
    inline: './src/index_inline.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
