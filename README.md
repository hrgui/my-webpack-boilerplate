# @hrgui/my-webpack-boilerplate

This repo is a playground on how I use [`webpack`](https://webpack.js.org/).

In 2022, my personal repositories use [`vite`](https://vitejs.dev/).

However, there are companies and repositories that still use webpack, because it is

# What is each loader/plugin/package for

- [`webpack.config.ts`](https://webpack.js.org/configuration/configuration-languages/#typescript) requires `typescript` and `ts-node` installed. That's how we can make that file typescript.
- [`webpack-dev-server`](https://webpack.js.org/guides/development/#root) is for a development server.
- [`css-loader`](https://webpack.js.org/loaders/css-loader/#root) and [`style-loader`](https://webpack.js.org/loaders/style-loader/#root) are for styles and CSS.
- [`esbuild-loader`](https://github.com/privatenumber/esbuild-loader) is to make TypeScript and JavaScript work. `tsc` is what I recommend to use - the build should not care much about TypeScript errors.
- [`html-webpack-plugin`](https://webpack.js.org/plugins/html-webpack-plugin/) is for webpack to understand HTML pages. It injects variables to index.html.
- [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin) is used for extracting CSS
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) is used for CSS modules AND dealing with postcss like tailwind.
- [`copy-webpack-plugin`](https://webpack.js.org/plugins/copy-webpack-plugin/) is used for copying files from `./public` to `./dist`

# Rules

- `./public` is where all the static files go
- `./dist` is where the build output will be
- Setting environment variable `NODE_ENV=production` will make it a production build.
- Setting environment variable `PUBLIC_URL` will make it compatible with Github Pages. Defaults to `/`.

# Inspiration

- [`create-react-app`](https://github.com/facebook/create-react-app)'s `react-scripts` is a great example of webpack configuration. Some of the code was modeled off that, but not everything as this repo aims to simplify the configuration even further.
