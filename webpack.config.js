var glob = require('glob')
var path = require('path')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var extend = require('extend')

const config = {
  sourcePath: 'src'
}

var baseWebpackConfig = {
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
  stats: {
    assets: true,
    colors: true,
    entrypoints: false,
    hash: false,
    modules: false,
    version: false
  }
}

// Workaround for https://github.com/webpack/webpack/issues/7300
// See exact solution at https://github.com/webpack/webpack/issues/7300#issuecomment-413959996
// Without this workaround, the css extract solution leaves behind empty JavaScript files
class MiniCssExtractPluginCleanUp {
  constructor (deleteWhere = /\.js(\.map)?$/) {
    this.shouldDelete = new RegExp(deleteWhere)
  }
  apply (compiler) {
    compiler.hooks.emit.tapAsync('MiniCssExtractPluginCleanup', (compilation, callback) => {
      Object.keys(compilation.assets).forEach((asset) => {
        if (this.shouldDelete.test(asset)) {
          delete compilation.assets[asset]
        }
      })
      callback()
    })
  }
}

var jsEntryPoints
var jsFiles = glob.sync(path.join(config.sourcePath, 'js/*.js'))

jsEntryPoints = jsFiles.reduce((accumulator, value) => {
  accumulator[path.join('js', path.basename(value, '.js'))] = path.resolve(value)
  return accumulator
}, {})

var scssFiles = glob.sync(path.join(config.sourcePath, 'scss/*.scss'))
var scssEntryPoints

scssEntryPoints = scssFiles.reduce((accumulator, value) => {
  accumulator[path.join('css', path.basename(value, '.scss'))] = path.resolve(value)
  return accumulator
}, {})

var jsWebpackConfig = {
  entry: jsEntryPoints,
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
            loader: 'file-loader',
            options: {
              name (file) {
                const componentName = path.dirname(file).split(path.sep).pop()
                return `images/hmlr-design-system/${componentName}/[name].[ext]`
              }
            }
          }
        ]
      }
    ]
  }
}

var scssWebpackConfig = {
  entry: scssEntryPoints,
  output: {
    filename: '[name].css'
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        resolve: {
          extensions: ['.scss', '.sass']
        },
        use: [
          // {
          //   loader: 'file-loader'
          // },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new MiniCssExtractPluginCleanUp()
  ]
}

module.exports = [
  extend(scssWebpackConfig, baseWebpackConfig),
  extend(jsWebpackConfig, baseWebpackConfig)
]