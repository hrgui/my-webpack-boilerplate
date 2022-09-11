import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

import { paths, moduleFileExtensions } from "./config/paths";
import { getStyleLoaders } from "./config/loaders";
import { isEnvDevelopment, isEnvProduction, shouldUseSourceMap } from "./config/env";

const config = (webpackEnv: { [name: string]: string }): webpack.Configuration => {
  console.log(`webpackEnv:`, webpackEnv);

  return {
    mode: (process.env.NODE_ENV as webpack.Configuration["mode"]) || "development",
    entry: paths.appSrc,
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // cleans up the output folder before build
    },
    devtool: "inline-source-map",
    devServer: {
      static: {
        directory: paths.appPublic,
      },
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
          exclude: /\.module\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvProduction() ? shouldUseSourceMap : isEnvDevelopment(),
            modules: {
              mode: "icss",
            },
          }),
          // Don't consider CSS imports dead code even if the
          // containing package claims to have no side effects.
          // Remove this when webpack adds a warning or an error for this.
          // See https://github.com/webpack/webpack/issues/6571
          sideEffects: true,
        },
        // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
        // using the extension .module.css
        {
          test: /\.module\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvProduction() ? shouldUseSourceMap : isEnvDevelopment(),
            modules: {
              mode: "local",
            },
          }),
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
    resolve: {
      extensions: moduleFileExtensions.map((ext) => `.${ext}`),
    },
  };
};

export default config;
