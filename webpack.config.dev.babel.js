import webpack from 'webpack';
import path from 'path';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
const buildPath = path.resolve(__dirname, './dist');
const sourcePath = path.resolve(__dirname, './src');
const staticSourcePath = path.join(__dirname, './public');

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [`${sourcePath}/assets/scss/index.scss`, `${sourcePath}/js/index.js`],
  output: {
    path: buildPath,
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.jpeg',
      '.jpg',
      '.gif',
      '.png'
    ],
    alias: {
      images: path.resolve(__dirname, 'src/assets/images'),
      components: path.resolve(__dirname, 'src/js/components'),
      modules: path.resolve(__dirname, 'src/js/modules'),
      utils: path.resolve(__dirname, 'src/js/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, 'src/js')],
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(
          ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        )
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?context=src/assets/images/&name=img/[path][name].[ext]',
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
        exclude: /node_modules/
      },
      {
        test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
        use: 'file-loader?name=src/assets/fonts/[name]-[hash].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: staticSourcePath,
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  plugins: [
    new ExtractTextWebpackPlugin('index.css'),
    new webpack.NamedModulesPlugin()
  ]
};
