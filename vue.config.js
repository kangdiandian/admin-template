const svgoConfig = require('./svgo-config');

// const __DEV__ = process.env.NODE_ENV === 'development';
const __PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: '/',
  configureWebpack: config => {
    config.resolve.extensions.push('.css', '.styl', '.md');
  },
  chainWebpack: config => {
    // 替换现有的loader
    //https://cli.vuejs.org/zh/guide/webpack.html#%E6%9B%BF%E6%8D%A2%E4%B8%80%E4%B8%AA%E8%A7%84%E5%88%99%E9%87%8C%E7%9A%84-loader
    const svgRule = config.module.rule('svg');

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();

    svgRule
      .test(/\.(svg)(\?.*)?$/)
      // .include.add('src/icons')
      // .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => {
        // 修改它的选项...
        return {
          symbolId: 'icon-[name]',
          // 不要提取成一个外部独立文件使用，这样与按需加载理念冲突
          // extract: true,
          // spriteFilename: 'svg-sprite.[hash:6].svg',
        };
      });

    // 优化SVG大小
    // Error in parsing SVG: Non-whitespace before first tag.
    // https://github.com/kisenka/svg-sprite-loader/issues/236
    // It means that svg-sprite-loader should applies after svgo-loader
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap(options => {
        return {
          ...svgoConfig,
        };
      });
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
