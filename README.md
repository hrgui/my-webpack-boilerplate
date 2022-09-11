# @hrgui/my-webpack-boilerplate

This repo is a playground on how I use [`webpack`](https://webpack.js.org/).

In 2022, my personal repositories use [`vite`](https://vitejs.dev/).

However, there are companies and repositories that still use webpack, because it is

# What is each loader/plugin/package for

- `webpack.config.ts` requires `typescript` and `ts-node` installed. That's how we can make that file typescript.
- `webpack-dev-server` is for a development server.
- `css-loader` and `style-loader` are for styles and CSS.
- `esbuild-loader` is to make TypeScript and JavaScript work. `tsc` is what I recommend to use - the build should not care much about TypeScript errors.
- `html-webpack-plugin` is for webpack to understand HTML pages. It injects variables to index.html.

# Rules

- `public` is where all the static files go

# Inspiration

- [`create-react-app`](https://github.com/facebook/create-react-app)'s `react-scripts` is a great example of webpack configuration.
