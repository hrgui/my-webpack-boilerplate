import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
import fs from "fs";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const paths = {
  appHtml: resolveApp("public/index.html"),
};

const config: webpack.Configuration = {
  mode: (process.env.NODE_ENV as webpack.Configuration["mode"]) || "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleans up the output folder before build
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx", // Or 'ts' if you don't need tsx
          target: "es2015",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

export default config;
