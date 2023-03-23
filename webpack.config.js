import * as url from 'url';
import path  from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const basePath = __dirname;

export default {
    mode: 'production',
    entry: [path.join(basePath, "src/main.web.js")],
    output: {
      filename: "app-[hash].js",
      chunkFilename: "[name]-[hash].bundle.js",
      publicPath: "/static/",
      path: path.join(basePath, "distWebpack/static")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.webpack.html",
        path: "distWebpack",
        filename: "../index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            configFile: path.join(basePath, "./babel.config.esm.js")
          }
        }
      ]
    },
    optimization: {},
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0",
      port: 5177,
      historyApiFallback: { index: "/static/../index.html" }
    }
  };