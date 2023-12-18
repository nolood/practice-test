const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PugPlugin = require("pug-plugin");
module.exports = (env) => {
  return {
    mode: env.mode || "development",
    entry: {
      index: path.resolve(__dirname, "src", "pages", "index.pug"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new PugPlugin({
        js: {
          filename: "[name].[contenthash].js",
        },
        css: {
          filename: "styles/[name].[contenthash].css",
        },
      }),
    ],
    optimization: {
      minimize: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      watchFiles: {
        paths: ["src/**/*.*", "assets/scss/**/*.*"],
        options: {
          usePolling: true,
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: PugPlugin.loader,
        },
        {
          test: /\.(png|jpg|jpeg|ico|svg)/,
          type: "asset/resource",
          generator: {
            filename: "assets/img/[name].[hash:8][ext]",
          },
        },
        {
          test: /\.(css|sass|scss)$/,
          use: ["css-loader", "sass-loader"],
        },
      ],
    },
  };
};
