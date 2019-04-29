var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  output: {
    path: path.resolve('public')
  },
  devServer: {
    contentBase: './public',
    hot: true,
    watchContentBase: true
  },
//   stats: {
//     assets: true,
//     colors: true,
//     entrypoints: false,
//     hash: false,
//     modules: false,
//     version: false
//   },
  entry: {
    main: './src/js/main.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: /node_modules\/(?!(govuk-react-components|hmlr-design-system)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              require('@babel/preset-env').default,
              require('@babel/preset-react').default
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}