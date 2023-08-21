const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-hexrgba'),
];

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', () => {
      fse.copySync('./app/assets/images', './docs/assets/images');
    });
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: [
    { loader: 'css-loader', options: { url: false } },
    {
      loader: 'postcss-loader',
      options: { postcssOptions: { plugins: postCSSPlugins } },
    },
  ],
};

let pages = fse
  .readdirSync('./app')
  .filter((file) => file.endsWith('.html'))
  .map(
    (page) =>
      new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`,
      })
  );

let config = {
  entry: './app/src/App.js',
  plugins: pages,
  module: {
    rules: [cssConfig],
  },
};

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader');
  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app'),
  };
  config.devServer = {
    watchFiles: ['./app/**/*.html'],
    static: {
      directory: path.join(__dirname, 'app'),
      watch: false,
    },
    hot: true,
    port: 3000,
  };
  config.mode = 'development';
}

if (currentTask == 'build') {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  });
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  };
  config.mode = 'production';
  config.optimization = {
    splitChunks: { chunks: 'all' }, // minSize: 1000 },
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  };
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'style.[chunkhash].css' }),
    new RunAfterCompile()
  );
}

let temp_deleteLater = {
  entry: './app/src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
  devServer: {
    watchFiles: ['./app/**/*.html'],
    static: {
      directory: path.join(__dirname, 'app'),
      watch: false,
    },
    hot: true,
    port: 3000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};

module.exports = config;
