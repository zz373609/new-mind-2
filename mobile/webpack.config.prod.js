process.env.NODE_ENV = 'production'
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HappyPack = require('happypack')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'js/[name]-[chunkhash:6].js',
    publicPath: '/static/'
  },
  externals: {
    'AMap': 'AMap'
  },
  stats: 'normal',
  module: {
    rules: [
      {
        test: /\.(webm|mp4)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.(ttf|eot|woff)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'font/font-[hash:16].[ext]'
          }
        }],
        exclude: [
          path.resolve(__dirname, './node_modules')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'img/img-[hash:16].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'happypack/loader'
        }],
        include: [
          path.resolve(__dirname, './src')
        ],
        exclude: [
          path.resolve(__dirname, './node_modules')
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            minimize: true,
            modules: true,
            localIdentName: '[folder]-[local]-[hash:4]'
          }
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './postcss.config.js'
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: false,
            minimize: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './postcss.config.js'
            }
          }
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './postcss.config.js'
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      title: '心冥想 SHINE MEDITATION | 冥想座具 MEDITATION SEAT | 高凤麟 GAO FENGLIN | 微客设计机构 NANOIN DESIGN STUDIO',
      template: './index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          require('autoprefixer'),
          require('precss'),
          require('postcss-assets')
        ]
      }
    }),
    new HappyPack({
      loaders: [
        {
          loader: 'babel-loader'
        }
      ],
      threads: 4
    }),
    new webpack.BannerPlugin({
      banner: 'created by generator-dva. https://www.npmjs.com/package/generator-dva :)'
    })
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      automaticNameDelimiter: '-',
      maxInitialRequests: 10,
      cacheGroups: {
        default: false,
        react: {
          test: /react/,
          chunks: 'initial'
        }
      }
    }
  }
}
