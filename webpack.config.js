var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: {
    app: ["./src/main.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/asset/",
    filename: "bundle.js",
    watchOptions: {
      ignored: /node_modules/
    }
  },
	resolve:{
		extensions: ['', '.scss', '.js', '.ts', '.tsx']
	},
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // The backup style loader
          'css?sourceMap!sass?sourceMap',
          'typings-for-css-modules-loader'
        )
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: { inline: true }
};

if (process.env.NODE_ENV == 'production') {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
} 

module.exports = webpackConfig;