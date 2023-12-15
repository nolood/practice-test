const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const PugPlugin = require('pug-plugin');
module.exports = (env) => {
  return {
    mode: env.mode || "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "views", "index.pug"),
        filename: 'index.html',
      }),
    ],
    optimization: {
      minimize: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      watchFiles: {
        paths: ['src/**/*.*', 'assets/scss/**/*.*'],
        options: {
          usePolling: true
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: PugPlugin.loader
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(s[ca]ss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  };
};
