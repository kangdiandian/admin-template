// const __DEV__ = process.env.NODE_ENV === 'development';
const __PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: '/',
  configureWebpack: config => {
    config.resolve.extensions.push('.css', '.styl', '.md');
  },
  css: {
    // modules: false,
    sourceMap: !__PROD__,
  },
  devServer: {
    port: 8083,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
