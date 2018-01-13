import webpack from 'webpack';
import path from 'path';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import OptimizeCSSAssets from 'optimize-css-assets-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';

const buildPath = path.resolve(__dirname, './dist');
const sourcePath = path.resolve(__dirname, './src');
const staticSourcePath = path.join(__dirname, './public');

export default {
  devtool: 'inline-source-map',
  entry: [`${sourcePath}/assets/scss/index.scss`, `${sourcePath}/js/index.js`],
  target: 'web',
  output: {
    path: buildPath,
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: buildPath
  },
  resolve: {
    extensions: [
      '.webpack-loader.js',
      '.web-loader.js',
      '.loader.js',
      '.js',
      '.jsx'
    ],
    modules: [sourcePath, path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: staticSourcePath }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextWebpackPlugin({
      filename: 'index.css',
      allChunks: true
    }),
    new UglifyJsWebpackPlugin({
      exclude: /node_modules/,
      parallel: true,
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        warnings: false,
        mangle: true,
        compress: {
          ecma: 8,
          dead_code: true
        }
      }
    }),
    new OptimizeCSSAssets()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'tests')],
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?context=src/assets/images/&name=[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=src/assets/fonts/[name]-[hash].[ext]'
      }
    ]
  }
};
