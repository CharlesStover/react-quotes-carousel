const path = require('path');

module.exports = {
  entry: './src/index.js',
  externals: {
    'react': {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    }
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [

      // JavaScript
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },

      // PNG
      {
        test: [ /\.png$/ ],
        loader: require.resolve('url-loader')
      },

      // SASS
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: false,
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]-[local]-[hash]',
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: 'index.js',
    library: 'react-quotes',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react')
    }
  },
  watch: process.env.NODE_ENV !== 'production'
};
