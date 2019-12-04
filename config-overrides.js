const { override, fixBabelImports,addPostcssPlugins } = require('customize-cra');
const paths = require('react-scripts/config/paths');
var path = require("path");
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist'); // 修改打包目录
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 16,
    propList: ['*']
    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
    // propWhiteList: []
  }),])
);